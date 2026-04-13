/**
 * @dk-hq/shared
 * Shared utilities, types, and configurations for DK-HQ platform
 */

// Supabase client
export { supabase, createServiceClient } from './lib/supabase';

// Database types
export type { Database } from './lib/database.types';

// Re-export Supabase types
export type {
  User,
  Session,
  AuthError,
  PostgrestError,
} from '@supabase/supabase-js';
