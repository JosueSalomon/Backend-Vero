export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  vero: {
    Tables: {
      tbl_bank_institutions: {
        Row: {
          bank_institution: string | null
          bank_institution_id: number
        }
        Insert: {
          bank_institution?: string | null
          bank_institution_id?: number
        }
        Update: {
          bank_institution?: string | null
          bank_institution_id?: number
        }
        Relationships: []
      }
      tbl_counteroffers: {
        Row: {
          approved: boolean | null
          comment: string | null
          counteroffer: string | null
          counteroffer_id: number
          driver_id: number
          route_id: number
        }
        Insert: {
          approved?: boolean | null
          comment?: string | null
          counteroffer?: string | null
          counteroffer_id?: number
          driver_id: number
          route_id: number
        }
        Update: {
          approved?: boolean | null
          comment?: string | null
          counteroffer?: string | null
          counteroffer_id?: number
          driver_id?: number
          route_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "tbl_counteroffers_driver_id_fkey"
            columns: ["driver_id"]
            isOneToOne: false
            referencedRelation: "tbl_users"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "tbl_counteroffers_route_id_fkey"
            columns: ["route_id"]
            isOneToOne: false
            referencedRelation: "tbl_routes"
            referencedColumns: ["route_id"]
          },
        ]
      }
      tbl_days: {
        Row: {
          day: string
          day_id: number
        }
        Insert: {
          day: string
          day_id?: number
        }
        Update: {
          day?: string
          day_id?: number
        }
        Relationships: []
      }
      tbl_driver_attendances: {
        Row: {
          attendance: boolean | null
          comment: string | null
          date: string | null
          driver_attendance_id: number
          rating: number
          trip_id: number | null
        }
        Insert: {
          attendance?: boolean | null
          comment?: string | null
          date?: string | null
          driver_attendance_id?: number
          rating: number
          trip_id?: number | null
        }
        Update: {
          attendance?: boolean | null
          comment?: string | null
          date?: string | null
          driver_attendance_id?: number
          rating?: number
          trip_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "tbl_driver_attendances_trip_id_fkey"
            columns: ["trip_id"]
            isOneToOne: false
            referencedRelation: "tbl_trips"
            referencedColumns: ["trip_id"]
          },
        ]
      }
      tbl_driver_documents: {
        Row: {
          document_id: number
          document_name: string | null
          document_url: string | null
          driver_id: number
        }
        Insert: {
          document_id?: number
          document_name?: string | null
          document_url?: string | null
          driver_id: number
        }
        Update: {
          document_id?: number
          document_name?: string | null
          document_url?: string | null
          driver_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "tbl_driver_documents_driver_id_fkey"
            columns: ["driver_id"]
            isOneToOne: false
            referencedRelation: "tbl_users"
            referencedColumns: ["user_id"]
          },
        ]
      }
      tbl_payments: {
        Row: {
          amount: string | null
          date: string | null
          payment_id: number
          trip_id: number | null
        }
        Insert: {
          amount?: string | null
          date?: string | null
          payment_id?: number
          trip_id?: number | null
        }
        Update: {
          amount?: string | null
          date?: string | null
          payment_id?: number
          trip_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "tbl_payments_trip_id_fkey"
            columns: ["trip_id"]
            isOneToOne: false
            referencedRelation: "tbl_trips"
            referencedColumns: ["trip_id"]
          },
        ]
      }
      tbl_report_images: {
        Row: {
          image_id_report: number
          report_id: number
          report_image_url: string
        }
        Insert: {
          image_id_report?: number
          report_id: number
          report_image_url: string
        }
        Update: {
          image_id_report?: number
          report_id?: number
          report_image_url?: string
        }
        Relationships: [
          {
            foreignKeyName: "tbl_report_images_report_id_fkey"
            columns: ["report_id"]
            isOneToOne: false
            referencedRelation: "tbl_reports"
            referencedColumns: ["report_id"]
          },
        ]
      }
      tbl_report_status: {
        Row: {
          id: number
          status: string
        }
        Insert: {
          id?: number
          status: string
        }
        Update: {
          id?: number
          status?: string
        }
        Relationships: []
      }
      tbl_reports: {
        Row: {
          report_code: string
          report_description: string
          report_id: number
          report_status_id: number
          report_subject: string | null
          reported_user_id: number | null
          reporter_date: string
          reporting_user_id: number
          reporting_user_type_id: number
          trip_id: number
        }
        Insert: {
          report_code: string
          report_description: string
          report_id?: number
          report_status_id: number
          report_subject?: string | null
          reported_user_id?: number | null
          reporter_date: string
          reporting_user_id: number
          reporting_user_type_id: number
          trip_id: number
        }
        Update: {
          report_code?: string
          report_description?: string
          report_id?: number
          report_status_id?: number
          report_subject?: string | null
          reported_user_id?: number | null
          reporter_date?: string
          reporting_user_id?: number
          reporting_user_type_id?: number
          trip_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "tbl_reports_report_status_id_fkey"
            columns: ["report_status_id"]
            isOneToOne: false
            referencedRelation: "tbl_report_status"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tbl_reports_reporting_user_type_id_fkey"
            columns: ["reporting_user_type_id"]
            isOneToOne: false
            referencedRelation: "tbl_user_types"
            referencedColumns: ["user_type_id"]
          },
          {
            foreignKeyName: "tbl_reports_trip_id_fkey"
            columns: ["trip_id"]
            isOneToOne: false
            referencedRelation: "tbl_trips"
            referencedColumns: ["trip_id"]
          },
        ]
      }
      tbl_route_days: {
        Row: {
          day_id: number
          route_id: number
        }
        Insert: {
          day_id: number
          route_id: number
        }
        Update: {
          day_id?: number
          route_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "tbl_route_days_day_id_fkey"
            columns: ["day_id"]
            isOneToOne: false
            referencedRelation: "tbl_days"
            referencedColumns: ["day_id"]
          },
          {
            foreignKeyName: "tbl_route_days_route_id_fkey"
            columns: ["route_id"]
            isOneToOne: false
            referencedRelation: "tbl_routes"
            referencedColumns: ["route_id"]
          },
        ]
      }
      tbl_routes: {
        Row: {
          arrival_point: string
          comment: string | null
          coordinate_x: number | null
          coordinate_y: number | null
          departure_point: string
          departure_time: string
          end_date: string
          estimated_price: number | null
          return_time: string | null
          route_id: number
          start_date: string
          user_id: number
        }
        Insert: {
          arrival_point: string
          comment?: string | null
          coordinate_x?: number | null
          coordinate_y?: number | null
          departure_point: string
          departure_time: string
          end_date: string
          estimated_price?: number | null
          return_time?: string | null
          route_id?: number
          start_date: string
          user_id: number
        }
        Update: {
          arrival_point?: string
          comment?: string | null
          coordinate_x?: number | null
          coordinate_y?: number | null
          departure_point?: string
          departure_time?: string
          end_date?: string
          estimated_price?: number | null
          return_time?: string | null
          route_id?: number
          start_date?: string
          user_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "tbl_routes_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "tbl_users"
            referencedColumns: ["user_id"]
          },
        ]
      }
      tbl_trips: {
        Row: {
          comment_for_driver: string | null
          comment_for_user: string | null
          counteroffer_id: number
          driver_cancels: boolean | null
          rating_for_driver: string | null
          rating_for_user: string | null
          trip_id: number
          user_cancels: boolean | null
        }
        Insert: {
          comment_for_driver?: string | null
          comment_for_user?: string | null
          counteroffer_id: number
          driver_cancels?: boolean | null
          rating_for_driver?: string | null
          rating_for_user?: string | null
          trip_id?: number
          user_cancels?: boolean | null
        }
        Update: {
          comment_for_driver?: string | null
          comment_for_user?: string | null
          counteroffer_id?: number
          driver_cancels?: boolean | null
          rating_for_driver?: string | null
          rating_for_user?: string | null
          trip_id?: number
          user_cancels?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "tbl_trips_counteroffer_id_fkey"
            columns: ["counteroffer_id"]
            isOneToOne: false
            referencedRelation: "tbl_counteroffers"
            referencedColumns: ["counteroffer_id"]
          },
        ]
      }
      tbl_user_status: {
        Row: {
          id_user_status: number
          user_status: string
        }
        Insert: {
          id_user_status?: number
          user_status: string
        }
        Update: {
          id_user_status?: number
          user_status?: string
        }
        Relationships: []
      }
      tbl_user_types: {
        Row: {
          user_type: string | null
          user_type_id: number
        }
        Insert: {
          user_type?: string | null
          user_type_id?: number
        }
        Update: {
          user_type?: string | null
          user_type_id?: number
        }
        Relationships: []
      }
      tbl_users: {
        Row: {
          bank_account_number: string | null
          bank_institution_id: number | null
          dni: string | null
          email: string
          first_names: string | null
          gender: string | null
          id_user_status: number | null
          last_names: string | null
          password: string
          phone: string
          profile_img_url: string | null
          rating: string | null
          token: string | null
          user_id: number
          user_type_id: number
        }
        Insert: {
          bank_account_number?: string | null
          bank_institution_id?: number | null
          dni?: string | null
          email: string
          first_names?: string | null
          gender?: string | null
          id_user_status?: number | null
          last_names?: string | null
          password: string
          phone: string
          profile_img_url?: string | null
          rating?: string | null
          token?: string | null
          user_id?: number
          user_type_id: number
        }
        Update: {
          bank_account_number?: string | null
          bank_institution_id?: number | null
          dni?: string | null
          email?: string
          first_names?: string | null
          gender?: string | null
          id_user_status?: number | null
          last_names?: string | null
          password?: string
          phone?: string
          profile_img_url?: string | null
          rating?: string | null
          token?: string | null
          user_id?: number
          user_type_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "tbl_users_bank_institution_id_fkey"
            columns: ["bank_institution_id"]
            isOneToOne: false
            referencedRelation: "tbl_bank_institutions"
            referencedColumns: ["bank_institution_id"]
          },
          {
            foreignKeyName: "tbl_users_id_user_status_fkey"
            columns: ["id_user_status"]
            isOneToOne: false
            referencedRelation: "tbl_user_status"
            referencedColumns: ["id_user_status"]
          },
          {
            foreignKeyName: "tbl_users_user_type_id_fkey"
            columns: ["user_type_id"]
            isOneToOne: false
            referencedRelation: "tbl_user_types"
            referencedColumns: ["user_type_id"]
          },
        ]
      }
      tbl_vehicles: {
        Row: {
          brand: string | null
          color: string | null
          driver_id: number
          plate: string | null
          vehicle_id: number
          year: number | null
        }
        Insert: {
          brand?: string | null
          color?: string | null
          driver_id: number
          plate?: string | null
          vehicle_id?: number
          year?: number | null
        }
        Update: {
          brand?: string | null
          color?: string | null
          driver_id?: number
          plate?: string | null
          vehicle_id?: number
          year?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "tbl_vehicles_driver_id_fkey"
            columns: ["driver_id"]
            isOneToOne: false
            referencedRelation: "tbl_users"
            referencedColumns: ["user_id"]
          },
        ]
      }
      tbl_verification_types: {
        Row: {
          verification_type: string
          verification_type_id: number
        }
        Insert: {
          verification_type: string
          verification_type_id?: number
        }
        Update: {
          verification_type?: string
          verification_type_id?: number
        }
        Relationships: []
      }
      tbl_verifications: {
        Row: {
          expiration_date: string
          status: boolean
          user_id: number
          validation_date: string
          verification_code: string
          verification_id: number
          verification_type_id: number
        }
        Insert: {
          expiration_date: string
          status: boolean
          user_id: number
          validation_date?: string
          verification_code: string
          verification_id?: number
          verification_type_id: number
        }
        Update: {
          expiration_date?: string
          status?: boolean
          user_id?: number
          validation_date?: string
          verification_code?: string
          verification_id?: number
          verification_type_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "tbl_verifications_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "tbl_users"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "tbl_verifications_verification_type_id_fkey"
            columns: ["verification_type_id"]
            isOneToOne: false
            referencedRelation: "tbl_verification_types"
            referencedColumns: ["verification_type_id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      p_cancel_trip: {
        Args: {
          p_trip_id: number
          p_reporting_user_type_id: number
        }
        Returns: Record<string, unknown>
      }
      p_create_counteroffers: {
        Args: {
          p_driver_id: number
          p_route_id: number
          p_counteroffer: string
          p_comment: string
        }
        Returns: Record<string, unknown>
      }
      p_create_route: {
        Args: {
          p_user_id: number
          p_departure_point: string
          p_arrival_point: string
          p_departure_time: string
          p_start_date: string
          p_end_date: string
          p_estimated_price: number
          p_comment: string
          p_return_time: string
          p_days_id: number[]
          p_coordinate_x: number
          p_coordinate_y: number
        }
        Returns: Record<string, unknown>
      }
      p_edit_person: {
        Args: {
          p_driver_id: number
          p_phone?: string
          p_email?: string
        }
        Returns: Record<string, unknown>
      }
      p_generate_new_code: {
        Args: {
          p_email: string
          p_code: string
        }
        Returns: Record<string, unknown>
      }
      p_get_counteroffer_detail: {
        Args: {
          p_counteroffer_id: number
        }
        Returns: {
          user_id: number
          full_name: string
          brand: string
          color: string
          year: number
          rating: string
          counteroffer: string
          comment: string
          phone: string
          plate: string
        }[]
      }
      p_get_counteroffers_user: {
        Args: {
          p_route_id: number
        }
        Returns: {
          counteroffer_id: number
          user_id: number
          full_name: string
          brand: string
          color: string
          year: number
          counteroffer: string
          approved: boolean
        }[]
      }
      p_get_details_route: {
        Args: {
          p_route_id: number
        }
        Returns: {
          user_id: number
          full_name: string
          comment: string
          start_date: string
          end_date: string
          departure_time: string
          return_time: string
          route_days: string[]
          estimated_price: number
          departure_point: string
          arrival_point: string
        }[]
      }
      p_get_driver: {
        Args: {
          p_id_driver: number
        }
        Returns: {
          driver_id: number
          nombre: string
          email: string
          phone: string
          profile_pic: string
        }[]
      }
      p_get_driver_trips: {
        Args: {
          p_driver_id: number
        }
        Returns: {
          trip_id: number
          user_name: string
          start_date: string
          end_date: string
          departure_point: string
          arrival_point: string
          departure_time: string
          return_time: string
          travel_days: string[]
          user_cancels: boolean
        }[]
      }
      p_get_trip_details: {
        Args: {
          p_trip_id: number
        }
        Returns: {
          user_id: number
          user_name: string
          start_date: string
          end_date: string
          phone: string
          departure_point: string
          arrival_point: string
          departure_time: string
          return_time: string
          travel_days: string[]
          counteroffer: string
          comment_for_driver: string
          user_cancels: boolean
        }[]
      }
      p_insert_token: {
        Args: {
          p_email: string
          p_password: string
          p_token: string
        }
        Returns: number
      }
      p_login: {
        Args: {
          p_email: string
          p_password: string
        }
        Returns: Record<string, unknown>
      }
      p_register_driver: {
        Args: {
          p_first_names: string
          p_last_names: string
          p_dni: string
          p_phone: string
          p_email: string
          p_password: string
          p_gender: string
          p_user_type_id: number
          p_url_profile_pic: string
          p_antecendetes_penales_img_url: string
          p_antecendetes_penales: string
          p_front_license_img_url: string
          p_front_license: string
          p_back_license_img_url: string
          p_back_license: string
          p_front_revision_img_url: string
          p_front_revision: string
          p_back_revision_img_url: string
          p_back_revision: string
          p_car_img_url_1: string
          p_car_1: string
          p_car_img_url_2: string
          p_car_2: string
          p_car_img_url_3: string
          p_car_3: string
          p_brand: string
          p_year: number
          p_color: string
          p_plate: string
          p_verification_code: string
        }
        Returns: Record<string, unknown>
      }
      p_report_trip: {
        Args: {
          p_trip_id: number
          p_report_status_id: number
          p_reported_user_id: number
          p_reporting_user_id: number
          p_reporting_user_type_id: number
          p_report_subject: string
          p_report_description: string
          p_reporter_date: string
          p_report_url_image?: string[]
        }
        Returns: Record<string, unknown>
      }
      p_verify_code: {
        Args: {
          p_email: string
          p_code: string
        }
        Returns: Record<string, unknown>
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
