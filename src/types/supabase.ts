export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      admin_profiles: {
        Row: {
          name: string
          user_id: number
        }
        Insert: {
          name: string
          user_id: number
        }
        Update: {
          name?: string
          user_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "admin_profiles_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      applications: {
        Row: {
          application_code: string
          client_id: number
          created_at: string
          id: number
          service_type: Database["public"]["Enums"]["service_type"]
          status: Database["public"]["Enums"]["application_status"]
          updated_at: string
        }
        Insert: {
          application_code: string
          client_id: number
          created_at?: string
          id?: never
          service_type: Database["public"]["Enums"]["service_type"]
          status?: Database["public"]["Enums"]["application_status"]
          updated_at?: string
        }
        Update: {
          application_code?: string
          client_id?: number
          created_at?: string
          id?: never
          service_type?: Database["public"]["Enums"]["service_type"]
          status?: Database["public"]["Enums"]["application_status"]
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "applications_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      client_profiles: {
        Row: {
          address: string | null
          age: number | null
          gender: Database["public"]["Enums"]["gender"] | null
          name: string
          nationality: Database["public"]["Enums"]["nationality"] | null
          user_id: number
        }
        Insert: {
          address?: string | null
          age?: number | null
          gender?: Database["public"]["Enums"]["gender"] | null
          name: string
          nationality?: Database["public"]["Enums"]["nationality"] | null
          user_id: number
        }
        Update: {
          address?: string | null
          age?: number | null
          gender?: Database["public"]["Enums"]["gender"] | null
          name?: string
          nationality?: Database["public"]["Enums"]["nationality"] | null
          user_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "client_profiles_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      documents: {
        Row: {
          application_id: number
          created_at: string
          id: number
          path: string
          status: Database["public"]["Enums"]["document_status"]
          type: Database["public"]["Enums"]["document_type"]
        }
        Insert: {
          application_id: number
          created_at?: string
          id?: never
          path: string
          status?: Database["public"]["Enums"]["document_status"]
          type: Database["public"]["Enums"]["document_type"]
        }
        Update: {
          application_id?: number
          created_at?: string
          id?: never
          path?: string
          status?: Database["public"]["Enums"]["document_status"]
          type?: Database["public"]["Enums"]["document_type"]
        }
        Relationships: [
          {
            foreignKeyName: "documents_application_id_fkey"
            columns: ["application_id"]
            isOneToOne: false
            referencedRelation: "applications"
            referencedColumns: ["id"]
          },
        ]
      }
      messages: {
        Row: {
          created_at: string
          id: number
          message: string
          receiver_id: number
          sender_id: number
        }
        Insert: {
          created_at?: string
          id?: never
          message: string
          receiver_id: number
          sender_id: number
        }
        Update: {
          created_at?: string
          id?: never
          message?: string
          receiver_id?: number
          sender_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "messages_receiver_id_fkey"
            columns: ["receiver_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "messages_sender_id_fkey"
            columns: ["sender_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      notifications: {
        Row: {
          application_id: number
          client_id: number
          id: number
          notification: string
        }
        Insert: {
          application_id: number
          client_id: number
          id?: never
          notification: string
        }
        Update: {
          application_id?: number
          client_id?: number
          id?: never
          notification?: string
        }
        Relationships: [
          {
            foreignKeyName: "notifications_application_id_fkey"
            columns: ["application_id"]
            isOneToOne: false
            referencedRelation: "applications"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "notifications_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      payments: {
        Row: {
          amount: number
          application_id: number
          client_id: number
          created_at: string
          id: number
          payment_method: Database["public"]["Enums"]["payment_method"]
          status: Database["public"]["Enums"]["payment_status"]
          transaction_code: string | null
          updated_at: string
        }
        Insert: {
          amount: number
          application_id: number
          client_id: number
          created_at?: string
          id?: never
          payment_method: Database["public"]["Enums"]["payment_method"]
          status?: Database["public"]["Enums"]["payment_status"]
          transaction_code?: string | null
          updated_at?: string
        }
        Update: {
          amount?: number
          application_id?: number
          client_id?: number
          created_at?: string
          id?: never
          payment_method?: Database["public"]["Enums"]["payment_method"]
          status?: Database["public"]["Enums"]["payment_status"]
          transaction_code?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "payments_application_id_fkey"
            columns: ["application_id"]
            isOneToOne: false
            referencedRelation: "applications"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payments_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      services: {
        Row: {
          description: string | null
          id: number
          is_available: boolean
          price: number
          type: Database["public"]["Enums"]["service_type"]
        }
        Insert: {
          description?: string | null
          id?: never
          is_available?: boolean
          price: number
          type: Database["public"]["Enums"]["service_type"]
        }
        Update: {
          description?: string | null
          id?: never
          is_available?: boolean
          price?: number
          type?: Database["public"]["Enums"]["service_type"]
        }
        Relationships: []
      }
      users: {
        Row: {
          created_at: string
          email: string
          id: number
          password: string
          role: Database["public"]["Enums"]["user_role"]
        }
        Insert: {
          created_at?: string
          email: string
          id?: never
          password: string
          role?: Database["public"]["Enums"]["user_role"]
        }
        Update: {
          created_at?: string
          email?: string
          id?: never
          password?: string
          role?: Database["public"]["Enums"]["user_role"]
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      application_status:
        | "draft"
        | "submitted"
        | "under_review"
        | "pending_documents"
        | "approved"
        | "rejected"
      document_status: "pending" | "verified" | "rejected"
      document_type:
        | "passport"
        | "birth_certificate"
        | "marriage_certificate"
        | "bank_statement"
        | "medical_certificate"
        | "photo"
        | "other"
      gender: "male" | "female" | "other"
      nationality:
        | "filipino"
        | "american"
        | "japanese"
        | "korean"
        | "chinese"
        | "other"
      payment_method:
        | "credit_card"
        | "debit_card"
        | "bank_transfer"
        | "gcash"
        | "maya"
      payment_status: "pending" | "paid" | "failed" | "refunded"
      service_type:
        | "srrv_classic"
        | "srrv_smile"
        | "srrv_human_touch"
        | "srrv_courtesy"
      user_role: "admin" | "applicant"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      application_status: [
        "draft",
        "submitted",
        "under_review",
        "pending_documents",
        "approved",
        "rejected",
      ],
      document_status: ["pending", "verified", "rejected"],
      document_type: [
        "passport",
        "birth_certificate",
        "marriage_certificate",
        "bank_statement",
        "medical_certificate",
        "photo",
        "other",
      ],
      gender: ["male", "female", "other"],
      nationality: [
        "filipino",
        "american",
        "japanese",
        "korean",
        "chinese",
        "other",
      ],
      payment_method: [
        "credit_card",
        "debit_card",
        "bank_transfer",
        "gcash",
        "maya",
      ],
      payment_status: ["pending", "paid", "failed", "refunded"],
      service_type: [
        "srrv_classic",
        "srrv_smile",
        "srrv_human_touch",
        "srrv_courtesy",
      ],
      user_role: ["admin", "applicant"],
    },
  },
} as const
