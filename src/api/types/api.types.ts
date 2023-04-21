export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      categories: {
        Row: {
          id: number
          label: string
        }
        Insert: {
          id?: number
          label: string
        }
        Update: {
          id?: number
          label?: string
        }
      }
      family: {
        Row: {
          id: number
          name: string
        }
        Insert: {
          id?: number
          name: string
        }
        Update: {
          id?: number
          name?: string
        }
      }
      operations: {
        Row: {
          amount: number
          category_id: number
          created_at: string | null
          id: string
          month: string
          user_id: number
        }
        Insert: {
          amount: number
          category_id: number
          created_at?: string | null
          id?: string
          month: string
          user_id: number
        }
        Update: {
          amount?: number
          category_id?: number
          created_at?: string | null
          id?: string
          month?: string
          user_id?: number
        }
      }
      users: {
        Row: {
          avatar_url: string | null
          country: string | null
          first_name: string | null
          id: string
          last_name: string | null
        }
        Insert: {
          avatar_url?: string | null
          country?: string | null
          first_name?: string | null
          id: string
          last_name?: string | null
        }
        Update: {
          avatar_url?: string | null
          country?: string | null
          first_name?: string | null
          id?: string
          last_name?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
