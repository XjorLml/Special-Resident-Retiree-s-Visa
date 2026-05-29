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

export type Sex = 'male' | 'female'

export type ApplicationStatus =
  | 'processing'
  | 'paused'
  | 'approved'
  | 'rejected'

export type DocumentStatus =
  | 'processing'
  | 'accepted'
  | 'rejected'
  | 'action need'

export type PaymentStatus =
  | 'processing'
  | 'pending'
  | 'cancelled'
  | 'success'

export type PaymentMethods =
  | 'credit_card'
  | 'debit_card'
  | 'e-wallet'

export type ServiceType =
  | 'basic'
  | 'premium'
  | 'vip'

// ─────────────────────────────────────────────
// TABLE ROWS
// ─────────────────────────────────────────────

export interface UserRow {
  id: string
  email: string
  password: string
  created_at: string
}

export interface AdminProfileRow {
  user_id: string
  name: string
}

export interface ClientProfileRow {
  user_id: string
  name: string
  sex: Sex | null
  birthday: string | null
  nationality: string
  age: number | null
  address: string
}

export interface ServiceRow {
  id: number
  type: ServiceType
  price: number | null
  description: string | null
  is_available: boolean | null
}

export interface PaymentRow {
  id: number
  user_id: string
  status: PaymentStatus
  amount: number | null
  transaction_code: string
  payment_method: PaymentMethods | null
  created_at: string | null
  updated_at: string | null
}

export interface NotificationRow {
  id: number
  user_id: string
  notification: string
  is_read: boolean
}

export interface ApplicationRow {
  id: number
  user_id: string
  service_type: ServiceType
  application_code: string
  status: ApplicationStatus
  created_at: string | null
  updated_at: string | null
}

export interface DocumentRow {
  id: number
  application_id: number
  path: string
  type: string | null
  status: DocumentStatus | null
  created_at: string | null
  updated_at: string | null
}

// for review
export interface MessageRow {
  id: number
  sender_id: string
  receiver_id: string
  message: string
  created_at: string
}

// ─────────────────────────────────────────────
// INSERT TYPES
// ─────────────────────────────────────────────

export interface UserInsert {
  email: string
  password: string
}

export interface AdminProfileInsert {
  user_id: string
  name: string
}

export interface ClientProfileInsert {
  user_id: string
  name: string
  sex: Sex | null
  birthday: string | null
  nationality: string
  age: number | null
  address: string
}

export interface ServiceInsert {
  type: ServiceType
  price: number | null
  description: string | null
  is_available: boolean | null
}

export interface PaymentInsert {
  user_id: string
  status: PaymentStatus
  amount: number | null
  transaction_code: string
  payment_method: PaymentMethods | null
}

export interface NotificationInsert {
  user_id: string
  notification: string
}

export interface ApplicationInsert {
  user_id: string
  service_type: ServiceType
  application_code: string
  status: ApplicationStatus | null
}

export interface DocumentInsert {
  application_id: number
  path: string
  type: string | null
  status: DocumentStatus | null
}

// for review
export interface MessageInsert {
  sender_id: string
  receiver_id: string
  message: string
}

// ─────────────────────────────────────────────
// UPDATE TYPES
// ─────────────────────────────────────────────

export type UserUpdate = Partial<Omit<UserRow, 'id' | 'created_at'>>
export type AdminProfileUpdate = Partial<Omit<AdminProfileRow, 'user_id'>>
export type ClientProfileUpdate = Partial<Omit<ClientProfileRow, 'user_id'>>
export type ServiceUpdate = Partial<Omit<ServiceRow, 'id'>>
export type PaymentUpdate = Partial<Omit<PaymentRow, 'id' | 'user_id' | 'created_at'>>
export type NotificationUpdate = Partial<Omit<NotificationRow, 'id' | 'user_id'>>
export type ApplicationUpdate = Partial<Omit<ApplicationRow, 'id' | 'user_id' | 'created_at'>>
export type DocumentUpdate = Partial<Omit<DocumentRow, 'id' | 'application_id' | 'created_at'>>

// for review
export type MessageUpdate = Partial<Omit<MessageRow, 'id' | 'created_at'>>

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
            foreignKeyName: 'payments_user_id_fkey'
            columns: ['user_id']
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
            foreignKeyName: 'notifications_user_id_fkey'
            columns: ['user_id']
            isOneToOne: false
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
            foreignKeyName: 'applications_user_id_fkey'
            columns: ['user_id']
            isOneToOne: false
            referencedRelation: 'users'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'applications_service_type_fkey'
            columns: ['service_type']
            isOneToOne: false
            referencedRelation: 'services'
            referencedColumns: ['type']
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

      // for review
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
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      sex: Sex
      application_status: ApplicationStatus
      document_status: DocumentStatus
      service_type: ServiceType
      payment_status: PaymentStatus
      payment_method: PaymentMethods
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