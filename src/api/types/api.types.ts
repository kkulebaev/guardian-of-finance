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
      operations: {
        Row: {
          amount: number
          categoryId: number
          created_at: string | null
          id: string
          month: string
          userId: number
        }
        Insert: {
          amount: number
          categoryId: number
          created_at?: string | null
          id?: string
          month: string
          userId: number
        }
        Update: {
          amount?: number
          categoryId?: number
          created_at?: string | null
          id?: string
          month?: string
          userId?: number
        }
      }
      users: {
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
