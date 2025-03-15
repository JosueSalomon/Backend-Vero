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
      tbl_asistencias_conductor: {
        Row: {
          asistencia: boolean | null
          fecha: string | null
          id_asistencia_conductor: number
          id_viaje: number | null
        }
        Insert: {
          asistencia?: boolean | null
          fecha?: string | null
          id_asistencia_conductor?: number
          id_viaje?: number | null
        }
        Update: {
          asistencia?: boolean | null
          fecha?: string | null
          id_asistencia_conductor?: number
          id_viaje?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "tbl_asistencias_conductor_id_viaje_fkey"
            columns: ["id_viaje"]
            isOneToOne: false
            referencedRelation: "tbl_viajes"
            referencedColumns: ["id_viaje"]
          },
        ]
      }
      tbl_contraofertas: {
        Row: {
          aprobada: boolean | null
          comentario: string | null
          contraoferta: string | null
          id_conductor: number
          id_contraoferta: number
          id_ruta: number
        }
        Insert: {
          aprobada?: boolean | null
          comentario?: string | null
          contraoferta?: string | null
          id_conductor: number
          id_contraoferta?: number
          id_ruta: number
        }
        Update: {
          aprobada?: boolean | null
          comentario?: string | null
          contraoferta?: string | null
          id_conductor?: number
          id_contraoferta?: number
          id_ruta?: number
        }
        Relationships: [
          {
            foreignKeyName: "tbl_contraofertas_id_conductor_fkey"
            columns: ["id_conductor"]
            isOneToOne: false
            referencedRelation: "tbl_usuarios"
            referencedColumns: ["id_usuario"]
          },
          {
            foreignKeyName: "tbl_contraofertas_id_ruta_fkey"
            columns: ["id_ruta"]
            isOneToOne: false
            referencedRelation: "tbl_rutas"
            referencedColumns: ["id_ruta"]
          },
        ]
      }
      tbl_dias: {
        Row: {
          dia: string
          id_dia: number
        }
        Insert: {
          dia: string
          id_dia?: number
        }
        Update: {
          dia?: string
          id_dia?: number
        }
        Relationships: []
      }
      tbl_dias_de_ruta: {
        Row: {
          id_dia: number
          id_ruta: number
        }
        Insert: {
          id_dia: number
          id_ruta: number
        }
        Update: {
          id_dia?: number
          id_ruta?: number
        }
        Relationships: [
          {
            foreignKeyName: "tbl_dias_de_ruta_id_dia_fkey"
            columns: ["id_dia"]
            isOneToOne: false
            referencedRelation: "tbl_dias"
            referencedColumns: ["id_dia"]
          },
          {
            foreignKeyName: "tbl_dias_de_ruta_id_ruta_fkey"
            columns: ["id_ruta"]
            isOneToOne: false
            referencedRelation: "tbl_rutas"
            referencedColumns: ["id_ruta"]
          },
        ]
      }
      tbl_documentos_conductor: {
        Row: {
          id_conductor: number
          id_documento: number
          nombre_documento: string | null
          url_documento: string | null
        }
        Insert: {
          id_conductor: number
          id_documento?: number
          nombre_documento?: string | null
          url_documento?: string | null
        }
        Update: {
          id_conductor?: number
          id_documento?: number
          nombre_documento?: string | null
          url_documento?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "tbl_documentos_conductor_id_conductor_fkey"
            columns: ["id_conductor"]
            isOneToOne: false
            referencedRelation: "tbl_usuarios"
            referencedColumns: ["id_usuario"]
          },
        ]
      }
      tbl_instituciones_bancarias: {
        Row: {
          id_institucion_bancaria: number
          institucion_bancaria: string | null
        }
        Insert: {
          id_institucion_bancaria?: number
          institucion_bancaria?: string | null
        }
        Update: {
          id_institucion_bancaria?: number
          institucion_bancaria?: string | null
        }
        Relationships: []
      }
      tbl_pagos: {
        Row: {
          fecha: string | null
          id_pago: number
          id_viaje: number | null
          monto: string | null
        }
        Insert: {
          fecha?: string | null
          id_pago?: number
          id_viaje?: number | null
          monto?: string | null
        }
        Update: {
          fecha?: string | null
          id_pago?: number
          id_viaje?: number | null
          monto?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "tbl_pagos_id_viaje_fkey"
            columns: ["id_viaje"]
            isOneToOne: false
            referencedRelation: "tbl_viajes"
            referencedColumns: ["id_viaje"]
          },
        ]
      }
      TBL_PRUEBA: {
        Row: {
          id: number
          Nombre: string
        }
        Insert: {
          id?: number
          Nombre: string
        }
        Update: {
          id?: number
          Nombre?: string
        }
        Relationships: []
      }
      tbl_reportes: {
        Row: {
          id_reporte: number
          id_tipo_reporte: number | null
          id_viaje: number | null
        }
        Insert: {
          id_reporte?: number
          id_tipo_reporte?: number | null
          id_viaje?: number | null
        }
        Update: {
          id_reporte?: number
          id_tipo_reporte?: number | null
          id_viaje?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "tbl_reportes_id_tipo_reporte_fkey"
            columns: ["id_tipo_reporte"]
            isOneToOne: false
            referencedRelation: "tbl_tipos_reporte"
            referencedColumns: ["id_tipo_reporte"]
          },
          {
            foreignKeyName: "tbl_reportes_id_viaje_fkey"
            columns: ["id_viaje"]
            isOneToOne: false
            referencedRelation: "tbl_viajes"
            referencedColumns: ["id_viaje"]
          },
        ]
      }
      tbl_rutas: {
        Row: {
          comentario: string | null
          fecha_final: string
          fecha_inicio: string
          hora_partida: string
          hora_regreso: string | null
          id_ruta: number
          id_usuario: number
          precio_estimado: number | null
          punto_llegada: string
          punto_partida: string
        }
        Insert: {
          comentario?: string | null
          fecha_final: string
          fecha_inicio: string
          hora_partida: string
          hora_regreso?: string | null
          id_ruta?: number
          id_usuario: number
          precio_estimado?: number | null
          punto_llegada: string
          punto_partida: string
        }
        Update: {
          comentario?: string | null
          fecha_final?: string
          fecha_inicio?: string
          hora_partida?: string
          hora_regreso?: string | null
          id_ruta?: number
          id_usuario?: number
          precio_estimado?: number | null
          punto_llegada?: string
          punto_partida?: string
        }
        Relationships: [
          {
            foreignKeyName: "tbl_rutas_id_usuario_fkey"
            columns: ["id_usuario"]
            isOneToOne: false
            referencedRelation: "tbl_usuarios"
            referencedColumns: ["id_usuario"]
          },
        ]
      }
      tbl_tipos_reporte: {
        Row: {
          id_tipo_reporte: number
          tipo_reporte: string
        }
        Insert: {
          id_tipo_reporte?: number
          tipo_reporte: string
        }
        Update: {
          id_tipo_reporte?: number
          tipo_reporte?: string
        }
        Relationships: []
      }
      tbl_tipos_usuario: {
        Row: {
          id_tipo_usuario: number
          tipo_usuario: string | null
        }
        Insert: {
          id_tipo_usuario?: number
          tipo_usuario?: string | null
        }
        Update: {
          id_tipo_usuario?: number
          tipo_usuario?: string | null
        }
        Relationships: []
      }
      tbl_tipos_verificacion: {
        Row: {
          id_tipo_verificacion: number
          tipo_verificacion: string
        }
        Insert: {
          id_tipo_verificacion?: number
          tipo_verificacion: string
        }
        Update: {
          id_tipo_verificacion?: number
          tipo_verificacion?: string
        }
        Relationships: []
      }
      tbl_usuarios: {
        Row: {
          apellidos: string | null
          calificacion: string | null
          contrasena: string
          correo: string
          dni: string | null
          genero: string | null
          id_institucion_bancaria: number | null
          id_tipo_usuario: number
          id_usuario: number
          nombres: string | null
          numero_cuenta_bancaria: string | null
          telefono: string
          url_img_perfil: string | null
        }
        Insert: {
          apellidos?: string | null
          calificacion?: string | null
          contrasena: string
          correo: string
          dni?: string | null
          genero?: string | null
          id_institucion_bancaria?: number | null
          id_tipo_usuario: number
          id_usuario?: number
          nombres?: string | null
          numero_cuenta_bancaria?: string | null
          telefono: string
          url_img_perfil?: string | null
        }
        Update: {
          apellidos?: string | null
          calificacion?: string | null
          contrasena?: string
          correo?: string
          dni?: string | null
          genero?: string | null
          id_institucion_bancaria?: number | null
          id_tipo_usuario?: number
          id_usuario?: number
          nombres?: string | null
          numero_cuenta_bancaria?: string | null
          telefono?: string
          url_img_perfil?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "tbl_usuarios_id_institucion_bancaria_fkey"
            columns: ["id_institucion_bancaria"]
            isOneToOne: false
            referencedRelation: "tbl_instituciones_bancarias"
            referencedColumns: ["id_institucion_bancaria"]
          },
          {
            foreignKeyName: "tbl_usuarios_id_tipo_usuario_fkey"
            columns: ["id_tipo_usuario"]
            isOneToOne: false
            referencedRelation: "tbl_tipos_usuario"
            referencedColumns: ["id_tipo_usuario"]
          },
        ]
      }
      tbl_vehiculos: {
        Row: {
          anio: number | null
          color: string | null
          id_conductor: number
          id_vehiculo: number
          marca: string | null
          placa: string | null
        }
        Insert: {
          anio?: number | null
          color?: string | null
          id_conductor: number
          id_vehiculo?: number
          marca?: string | null
          placa?: string | null
        }
        Update: {
          anio?: number | null
          color?: string | null
          id_conductor?: number
          id_vehiculo?: number
          marca?: string | null
          placa?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "tbl_vehiculos_id_conductor_fkey"
            columns: ["id_conductor"]
            isOneToOne: false
            referencedRelation: "tbl_usuarios"
            referencedColumns: ["id_usuario"]
          },
        ]
      }
      tbl_verificaciones: {
        Row: {
          codigo_verificacion: string
          estado: boolean
          fecha_expiracion: string
          fecha_validacion: string
          id_tipo_verificacion: number
          id_usuario: number
          id_verificacion: number
        }
        Insert: {
          codigo_verificacion: string
          estado: boolean
          fecha_expiracion: string
          fecha_validacion?: string
          id_tipo_verificacion: number
          id_usuario: number
          id_verificacion?: number
        }
        Update: {
          codigo_verificacion?: string
          estado?: boolean
          fecha_expiracion?: string
          fecha_validacion?: string
          id_tipo_verificacion?: number
          id_usuario?: number
          id_verificacion?: number
        }
        Relationships: [
          {
            foreignKeyName: "tbl_verificaciones_id_tipo_verificacion_fkey"
            columns: ["id_tipo_verificacion"]
            isOneToOne: false
            referencedRelation: "tbl_tipos_verificacion"
            referencedColumns: ["id_tipo_verificacion"]
          },
          {
            foreignKeyName: "tbl_verificaciones_id_usuario_fkey"
            columns: ["id_usuario"]
            isOneToOne: false
            referencedRelation: "tbl_usuarios"
            referencedColumns: ["id_usuario"]
          },
        ]
      }
      tbl_viajes: {
        Row: {
          calificacion_para_conductor: string | null
          calificacion_para_usuario: string | null
          conductor_cancela: boolean | null
          id_contraoferta: number
          id_viaje: number
          usuario_cancela: boolean | null
        }
        Insert: {
          calificacion_para_conductor?: string | null
          calificacion_para_usuario?: string | null
          conductor_cancela?: boolean | null
          id_contraoferta: number
          id_viaje?: number
          usuario_cancela?: boolean | null
        }
        Update: {
          calificacion_para_conductor?: string | null
          calificacion_para_usuario?: string | null
          conductor_cancela?: boolean | null
          id_contraoferta?: number
          id_viaje?: number
          usuario_cancela?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "tbl_viajes_id_contraoferta_fkey"
            columns: ["id_contraoferta"]
            isOneToOne: false
            referencedRelation: "tbl_contraofertas"
            referencedColumns: ["id_contraoferta"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      create_prueba: {
        Args: {
          p_nombre: string
        }
        Returns: {
          id: number
          Nombre: string
        }[]
      }
      delete_prueba: {
        Args: {
          p_id: number
        }
        Returns: undefined
      }
      p_get_driver_trips: {
        Args: {
          id_conductor: number
        }
        Returns: {
          nombre_usuario: string
          fecha_inicio: string
          fecha_final: string
          hora_partida: string
          hora_regreso: string
          dias_de_viaje: string[]
        }[]
      }
      p_registro_conductor: {
        Args: {
          p_nombres: string
          p_apellidos: string
          p_dni: string
          p_telefono: string
          p_correo: string
          p_contrasena: string
          p_genero: string
          p_id_tipo_usuario: number
          p_id_institucion_bancaria: number
          p_numero_cuenta_bancaria: number
          p_codigo_verificacion: string
        }
        Returns: Record<string, unknown>
      }
      read_prueba_by_id: {
        Args: {
          p_id: number
        }
        Returns: {
          id: number
          Nombre: string
        }[]
      }
      read_pruebas: {
        Args: Record<PropertyKey, never>
        Returns: {
          id: number
          Nombre: string
        }[]
      }
      update_prueba: {
        Args: {
          p_id: number
          p_nombre: string
        }
        Returns: {
          id: number
          Nombre: string
        }[]
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
