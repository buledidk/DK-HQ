-- packages/db/migrations/0001_skills_catalog.sql
--
-- Mirror table for the Anthropic Skills API (claude.ai source of truth).
-- Populated by scripts/mirror-to-supabase.ts.
--
-- Apply via the Supabase SQL editor (dashboard.supabase.com) or psql:
--   psql "$DATABASE_URL" -f packages/db/migrations/0001_skills_catalog.sql

create table if not exists public.skills_catalog (
  skill_id      text primary key,
  name          text not null unique,
  description   text not null,
  instructions  text not null,
  created_at    timestamptz,
  updated_at    timestamptz,
  mirrored_at   timestamptz not null default now()
);

create index if not exists skills_catalog_name_idx
  on public.skills_catalog (name);

-- Row-level security: public can read the catalog; only the service role
-- can write (via scripts/mirror-to-supabase.ts using the service-role key).

alter table public.skills_catalog enable row level security;

drop policy if exists skills_catalog_public_read on public.skills_catalog;
create policy skills_catalog_public_read
  on public.skills_catalog
  for select
  using (true);

-- No insert/update/delete policies: writes come from the service role
-- only, which bypasses RLS.

comment on table public.skills_catalog is
  'Mirror of Anthropic Skills API (claude.ai). Read-only for clients; populated by scripts/mirror-to-supabase.ts.';
