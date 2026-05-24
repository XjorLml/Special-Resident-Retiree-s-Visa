export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

// ─────────────────────────────────────────────
// ENUMS
// ─────────────────────────────────────────────

export type UserRole = 'admin' | 'applicant'

export type Gender = 'male' | 'female' | 'other'

export type Nationality =
  | 'filipino'
  | 'american'
  | 'japanese'
  | 'korean'
  | 'chinese'
  | 'other'

export type ApplicationStatus =
  | 'draft'
  | 'submitted'
  | 'under_review'
  | 'pending_documents'
  | 'approved'
  | 'rejected'

export type DocumentStatus =
  | 'pending'
  | 'verified'
  | 'rejected'

export type DocumentType =
  | 'passport'
  | 'birth_certificate'
  | 'marriage_certificate'
  | 'bank_statement'
  | 'medical_certificate'
  | 'photo'
  | 'other'

export type ServiceType =
  | 'srrv_classic'
  | 'srrv_smile'
  | 'srrv_human_touch'
  | 'srrv_courtesy'

export type PaymentStatus =
  | 'pending'
  | 'paid'
  | 'failed'
  | 'refunded'

export type PaymentMethod =
  | 'credit_card'
  | 'debit_card'
  | 'bank_transfer'
  | 'gcash'
  | 'maya'

// ─────────────────────────────────────────────
// TABLE ROWS
// ─────────────────────────────────────────────

export interface UserRow {
  id: number
  email: string
  password: string
  role: UserRole
  created_at: string
}

export interface AdminProfileRow {
  user_id: number
  name: string
}

export interface ClientProfileRow {
  user_id: number
  name: string
  gender: Gender | null
  nationality: Nationality | null
  age: number | null
  address: string | null
}

export interface ApplicationRow {
  id: number
  client_id: number
  service_type: ServiceType
  application_code: string
  status: ApplicationStatus
  created_at: string
  updated_at: string
}

export interface DocumentRow {
  id: number
  application_id: number
  path: string
  type: DocumentType
  status: DocumentStatus
  created_at: string
}

export interface ServiceRow {
  id: number
  type: ServiceType
  price: number
  description: string | null
  is_available: boolean
}

export interface PaymentRow {
  id: number
  application_id: number
  client_id: number
  status: PaymentStatus
  amount: number
  transaction_code: string | null
  payment_method: PaymentMethod
  created_at: string
  updated_at: string
}

export interface MessageRow {
  id: number
  sender_id: number
  receiver_id: number
  message: string
  created_at: string
}

export interface NotificationRow {
  id: number
  client_id: number
  application_id: number
  notification: string
}

// ─────────────────────────────────────────────
// INSERT TYPES
// ─────────────────────────────────────────────

export interface UserInsert {
  email: string
  password: string
  role: UserRole
}

export interface AdminProfileInsert {
  user_id: number
  name: string
}

export interface ClientProfileInsert {
  user_id: number
  name: string
  gender?: Gender | null
  nationality?: Nationality | null
  age?: number | null
  address?: string | null
}

export interface ApplicationInsert {
  client_id: number
  service_type: ServiceType
  application_code: string
  status?: ApplicationStatus
}

export interface DocumentInsert {
  application_id: number
  path: string
  type: DocumentType
  status?: DocumentStatus
}

export interface ServiceInsert {
  type: ServiceType
  price: number
  description?: string | null
  is_available?: boolean
}

export interface PaymentInsert {
  application_id: number
  client_id: number
  status?: PaymentStatus
  amount: number
  transaction_code?: string | null
  payment_method: PaymentMethod
}

export interface MessageInsert {
  sender_id: number
  receiver_id: number
  message: string
}

export interface NotificationInsert {
  client_id: number
  application_id: number
  notification: string
}

// ─────────────────────────────────────────────
// UPDATE TYPES
// ─────────────────────────────────────────────

export type UserUpdate = Partial<Omit<UserRow, 'id' | 'created_at'>>
export type AdminProfileUpdate = Partial<Omit<AdminProfileRow, 'user_id'>>
export type ClientProfileUpdate = Partial<Omit<ClientProfileRow, 'user_id'>>
export type ApplicationUpdate = Partial<Omit<ApplicationRow, 'id' | 'created_at'>>
export type DocumentUpdate = Partial<Omit<DocumentRow, 'id' | 'created_at'>>
export type ServiceUpdate = Partial<Omit<ServiceRow, 'id'>>
export type PaymentUpdate = Partial<Omit<PaymentRow, 'id' | 'created_at'>>
export type MessageUpdate = Partial<Omit<MessageRow, 'id' | 'created_at'>>
export type NotificationUpdate = Partial<Omit<NotificationRow, 'id'>>

// ─────────────────────────────────────────────
// DATABASE SCHEMA
// ─────────────────────────────────────────────

export interface Database {
  public: {
    Tables: {
      users: {
        Row: UserRow
        Insert: UserInsert
        Update: UserUpdate
        Relationships: []
      }
      admin_profiles: {
        Row: AdminProfileRow
        Insert: AdminProfileInsert
        Update: AdminProfileUpdate
        Relationships: [
          {
            foreignKeyName: 'admin_profiles_user_id_fkey'
            columns: ['user_id']
            isOneToOne: true
            referencedRelation: 'users'
            referencedColumns: ['id']
          }
        ]
      }
      client_profiles: {
        Row: ClientProfileRow
        Insert: ClientProfileInsert
        Update: ClientProfileUpdate
        Relationships: [
          {
            foreignKeyName: 'client_profiles_user_id_fkey'
            columns: ['user_id']
            isOneToOne: true
            referencedRelation: 'users'
            referencedColumns: ['id']
          }
        ]
      }
      applications: {
        Row: ApplicationRow
        Insert: ApplicationInsert
        Update: ApplicationUpdate
        Relationships: [
          {
            foreignKeyName: 'applications_client_id_fkey'
            columns: ['client_id']
            isOneToOne: false
            referencedRelation: 'users'
            referencedColumns: ['id']
          }
        ]
      }
      documents: {
        Row: DocumentRow
        Insert: DocumentInsert
        Update: DocumentUpdate
        Relationships: [
          {
            foreignKeyName: 'documents_application_id_fkey'
            columns: ['application_id']
            isOneToOne: false
            referencedRelation: 'applications'
            referencedColumns: ['id']
          }
        ]
      }
      services: {
        Row: ServiceRow
        Insert: ServiceInsert
        Update: ServiceUpdate
        Relationships: []
      }
      payments: {
        Row: PaymentRow
        Insert: PaymentInsert
        Update: PaymentUpdate
        Relationships: [
          {
            foreignKeyName: 'payments_application_id_fkey'
            columns: ['application_id']
            isOneToOne: false
            referencedRelation: 'applications'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'payments_client_id_fkey'
            columns: ['client_id']
            isOneToOne: false
            referencedRelation: 'users'
            referencedColumns: ['id']
          }
        ]
      }
      messages: {
        Row: MessageRow
        Insert: MessageInsert
        Update: MessageUpdate
        Relationships: [
          {
            foreignKeyName: 'messages_sender_id_fkey'
            columns: ['sender_id']
            isOneToOne: false
            referencedRelation: 'users'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'messages_receiver_id_fkey'
            columns: ['receiver_id']
            isOneToOne: false
            referencedRelation: 'users'
            referencedColumns: ['id']
          }
        ]
      }
      notifications: {
        Row: NotificationRow
        Insert: NotificationInsert
        Update: NotificationUpdate
        Relationships: [
          {
            foreignKeyName: 'notifications_client_id_fkey'
            columns: ['client_id']
            isOneToOne: false
            referencedRelation: 'users'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'notifications_application_id_fkey'
            columns: ['application_id']
            isOneToOne: false
            referencedRelation: 'applications'
            referencedColumns: ['id']
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      user_role: UserRole
      gender: Gender
      nationality: Nationality
      application_status: ApplicationStatus
      document_status: DocumentStatus
      document_type: DocumentType
      service_type: ServiceType
      payment_status: PaymentStatus
      payment_method: PaymentMethod
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

// ─────────────────────────────────────────────
// CONVENIENCE ALIASES
// ─────────────────────────────────────────────

export type Tables<T extends keyof Database['public']['Tables']> =
  Database['public']['Tables'][T]['Row']

export type Enums<T extends keyof Database['public']['Enums']> =
  Database['public']['Enums'][T]