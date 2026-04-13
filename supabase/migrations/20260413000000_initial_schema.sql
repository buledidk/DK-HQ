-- DK-HQ Initial Database Schema
-- Audit Automation Platform for UK Accountants

-- Enable required extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pg_trgm";

-- ============================================
-- ENUMS
-- ============================================

CREATE TYPE user_role AS ENUM ('admin', 'manager', 'staff');
CREATE TYPE engagement_status AS ENUM ('planning', 'fieldwork', 'review', 'completion', 'signed_off');
CREATE TYPE risk_level AS ENUM ('low', 'medium', 'high');
CREATE TYPE working_paper_status AS ENUM ('draft', 'prepared', 'reviewed', 'approved');
CREATE TYPE procedure_type AS ENUM ('test_of_control', 'substantive_analytical', 'substantive_detail');

-- ============================================
-- ORGANIZATIONS
-- ============================================

CREATE TABLE organizations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    slug VARCHAR(100) UNIQUE NOT NULL,
    logo_url TEXT,
    settings JSONB DEFAULT '{}',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_organizations_slug ON organizations(slug);

-- ============================================
-- PROFILES (extends Supabase Auth)
-- ============================================

CREATE TABLE profiles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID UNIQUE NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    organization_id UUID REFERENCES organizations(id) ON DELETE SET NULL,
    role user_role DEFAULT 'staff',
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    job_title VARCHAR(100),
    phone VARCHAR(50),
    avatar_url TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_profiles_user_id ON profiles(user_id);
CREATE INDEX idx_profiles_organization_id ON profiles(organization_id);

-- ============================================
-- CLIENTS
-- ============================================

CREATE TABLE clients (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,

    -- Company Information
    company_number VARCHAR(20),
    name VARCHAR(255) NOT NULL,
    trading_name VARCHAR(255),
    industry VARCHAR(100),
    sic_codes TEXT[],

    -- Dates
    incorporation_date DATE,
    year_end_date DATE,

    -- Address
    registered_address JSONB,

    -- Accounting Software Integration
    xero_tenant_id VARCHAR(100),
    quickbooks_realm_id VARCHAR(100),
    sage_company_id VARCHAR(100),

    -- Contact
    primary_contact JSONB,

    -- Status
    is_active BOOLEAN DEFAULT true,

    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_clients_organization_id ON clients(organization_id);
CREATE INDEX idx_clients_company_number ON clients(company_number);
CREATE INDEX idx_clients_name ON clients USING gin(name gin_trgm_ops);

-- ============================================
-- ENGAGEMENTS (Audit Jobs)
-- ============================================

CREATE TABLE engagements (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    client_id UUID NOT NULL REFERENCES clients(id) ON DELETE CASCADE,
    organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,

    -- Engagement Details
    year_end DATE NOT NULL,
    engagement_type VARCHAR(50) DEFAULT 'statutory_audit',
    status engagement_status DEFAULT 'planning',

    -- Team
    lead_partner_id UUID REFERENCES profiles(id),
    manager_id UUID REFERENCES profiles(id),

    -- Materiality
    materiality_overall NUMERIC(15, 2),
    materiality_performance NUMERIC(15, 2),
    materiality_trivial NUMERIC(15, 2),

    -- Dates
    planning_start DATE,
    fieldwork_start DATE,
    target_completion DATE,
    actual_completion DATE,

    -- Notes
    notes TEXT,

    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_engagements_client_id ON engagements(client_id);
CREATE INDEX idx_engagements_organization_id ON engagements(organization_id);
CREATE INDEX idx_engagements_status ON engagements(status);

-- ============================================
-- RISK ASSESSMENTS
-- ============================================

CREATE TABLE risk_assessments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    engagement_id UUID NOT NULL REFERENCES engagements(id) ON DELETE CASCADE,

    -- Risk Area
    area VARCHAR(100) NOT NULL,
    assertion VARCHAR(100),

    -- Risk Levels
    inherent_risk risk_level DEFAULT 'medium',
    control_risk risk_level DEFAULT 'medium',
    detection_risk risk_level DEFAULT 'medium',
    combined_risk risk_level DEFAULT 'medium',

    -- Assessment
    risk_factors TEXT[],
    notes TEXT,

    -- AI Analysis
    ai_assessment JSONB,

    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_risk_assessments_engagement_id ON risk_assessments(engagement_id);

-- ============================================
-- WORKING PAPERS
-- ============================================

CREATE TABLE working_papers (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    engagement_id UUID NOT NULL REFERENCES engagements(id) ON DELETE CASCADE,

    -- Reference
    section VARCHAR(50) NOT NULL,
    reference VARCHAR(20) NOT NULL,
    title VARCHAR(255) NOT NULL,

    -- Content
    content JSONB DEFAULT '{}',

    -- Workflow
    status working_paper_status DEFAULT 'draft',
    prepared_by UUID REFERENCES profiles(id),
    prepared_at TIMESTAMPTZ,
    reviewed_by UUID REFERENCES profiles(id),
    reviewed_at TIMESTAMPTZ,

    -- Version Control
    version INTEGER DEFAULT 1,

    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),

    UNIQUE(engagement_id, reference)
);

CREATE INDEX idx_working_papers_engagement_id ON working_papers(engagement_id);
CREATE INDEX idx_working_papers_section ON working_papers(section);

-- ============================================
-- AUDIT PROCEDURES
-- ============================================

CREATE TABLE audit_procedures (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    engagement_id UUID NOT NULL REFERENCES engagements(id) ON DELETE CASCADE,
    working_paper_id UUID REFERENCES working_papers(id) ON DELETE SET NULL,

    -- Procedure Details
    procedure_type procedure_type NOT NULL,
    area VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,

    -- Testing
    sample_size INTEGER,
    items_tested INTEGER,
    exceptions_found INTEGER DEFAULT 0,

    -- Results
    result TEXT,
    conclusion TEXT,

    -- Workflow
    performed_by UUID REFERENCES profiles(id),
    performed_at TIMESTAMPTZ,

    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_audit_procedures_engagement_id ON audit_procedures(engagement_id);
CREATE INDEX idx_audit_procedures_working_paper_id ON audit_procedures(working_paper_id);

-- ============================================
-- DOCUMENTS
-- ============================================

CREATE TABLE documents (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    engagement_id UUID REFERENCES engagements(id) ON DELETE CASCADE,
    client_id UUID REFERENCES clients(id) ON DELETE CASCADE,

    -- File Info
    name VARCHAR(255) NOT NULL,
    file_path TEXT NOT NULL,
    file_type VARCHAR(50),
    file_size INTEGER,

    -- Classification
    category VARCHAR(100),
    tags TEXT[],

    -- OCR/AI Processing
    extracted_text TEXT,
    ai_summary TEXT,

    -- Upload Info
    uploaded_by UUID REFERENCES profiles(id),

    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_documents_engagement_id ON documents(engagement_id);
CREATE INDEX idx_documents_client_id ON documents(client_id);

-- ============================================
-- AUDIT TRAIL
-- ============================================

CREATE TABLE audit_logs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES profiles(id),
    organization_id UUID REFERENCES organizations(id),

    -- Action
    action VARCHAR(100) NOT NULL,
    entity_type VARCHAR(100) NOT NULL,
    entity_id UUID,

    -- Details
    old_values JSONB,
    new_values JSONB,
    ip_address INET,
    user_agent TEXT,

    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_audit_logs_user_id ON audit_logs(user_id);
CREATE INDEX idx_audit_logs_entity ON audit_logs(entity_type, entity_id);
CREATE INDEX idx_audit_logs_created_at ON audit_logs(created_at);

-- ============================================
-- ROW LEVEL SECURITY (RLS)
-- ============================================

ALTER TABLE organizations ENABLE ROW LEVEL SECURITY;
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE clients ENABLE ROW LEVEL SECURITY;
ALTER TABLE engagements ENABLE ROW LEVEL SECURITY;
ALTER TABLE risk_assessments ENABLE ROW LEVEL SECURITY;
ALTER TABLE working_papers ENABLE ROW LEVEL SECURITY;
ALTER TABLE audit_procedures ENABLE ROW LEVEL SECURITY;
ALTER TABLE documents ENABLE ROW LEVEL SECURITY;
ALTER TABLE audit_logs ENABLE ROW LEVEL SECURITY;

-- Profiles: Users can read/update their own profile
CREATE POLICY "Users can view own profile" ON profiles
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can update own profile" ON profiles
    FOR UPDATE USING (auth.uid() = user_id);

-- Organization members can view their organization
CREATE POLICY "Organization members can view organization" ON organizations
    FOR SELECT USING (
        id IN (
            SELECT organization_id FROM profiles WHERE user_id = auth.uid()
        )
    );

-- Clients: Organization members can manage clients
CREATE POLICY "Organization members can manage clients" ON clients
    FOR ALL USING (
        organization_id IN (
            SELECT organization_id FROM profiles WHERE user_id = auth.uid()
        )
    );

-- Engagements: Organization members can manage engagements
CREATE POLICY "Organization members can manage engagements" ON engagements
    FOR ALL USING (
        organization_id IN (
            SELECT organization_id FROM profiles WHERE user_id = auth.uid()
        )
    );

-- Working papers, procedures, risk assessments: Through engagement
CREATE POLICY "Access via engagement" ON working_papers
    FOR ALL USING (
        engagement_id IN (
            SELECT id FROM engagements WHERE organization_id IN (
                SELECT organization_id FROM profiles WHERE user_id = auth.uid()
            )
        )
    );

CREATE POLICY "Access via engagement" ON risk_assessments
    FOR ALL USING (
        engagement_id IN (
            SELECT id FROM engagements WHERE organization_id IN (
                SELECT organization_id FROM profiles WHERE user_id = auth.uid()
            )
        )
    );

CREATE POLICY "Access via engagement" ON audit_procedures
    FOR ALL USING (
        engagement_id IN (
            SELECT id FROM engagements WHERE organization_id IN (
                SELECT organization_id FROM profiles WHERE user_id = auth.uid()
            )
        )
    );

-- Documents: Via client or engagement
CREATE POLICY "Access documents via client or engagement" ON documents
    FOR ALL USING (
        client_id IN (
            SELECT id FROM clients WHERE organization_id IN (
                SELECT organization_id FROM profiles WHERE user_id = auth.uid()
            )
        )
        OR
        engagement_id IN (
            SELECT id FROM engagements WHERE organization_id IN (
                SELECT organization_id FROM profiles WHERE user_id = auth.uid()
            )
        )
    );

-- Audit logs: Organization members can view
CREATE POLICY "Organization members can view audit logs" ON audit_logs
    FOR SELECT USING (
        organization_id IN (
            SELECT organization_id FROM profiles WHERE user_id = auth.uid()
        )
    );

-- ============================================
-- FUNCTIONS & TRIGGERS
-- ============================================

-- Auto-update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Apply to all tables
CREATE TRIGGER update_organizations_updated_at BEFORE UPDATE ON organizations FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON profiles FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER update_clients_updated_at BEFORE UPDATE ON clients FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER update_engagements_updated_at BEFORE UPDATE ON engagements FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER update_risk_assessments_updated_at BEFORE UPDATE ON risk_assessments FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER update_working_papers_updated_at BEFORE UPDATE ON working_papers FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER update_audit_procedures_updated_at BEFORE UPDATE ON audit_procedures FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER update_documents_updated_at BEFORE UPDATE ON documents FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- Create profile on user signup
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.profiles (user_id, first_name, last_name)
    VALUES (
        NEW.id,
        NEW.raw_user_meta_data->>'first_name',
        NEW.raw_user_meta_data->>'last_name'
    );
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW EXECUTE FUNCTION handle_new_user();

-- Calculate combined risk level
CREATE OR REPLACE FUNCTION calculate_combined_risk(
    inherent risk_level,
    control risk_level
) RETURNS risk_level AS $$
BEGIN
    IF inherent = 'high' OR control = 'high' THEN
        RETURN 'high';
    ELSIF inherent = 'medium' OR control = 'medium' THEN
        RETURN 'medium';
    ELSE
        RETURN 'low';
    END IF;
END;
$$ LANGUAGE plpgsql;
