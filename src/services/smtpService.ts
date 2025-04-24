import nodemailer from 'nodemailer';


export const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for port 465, false for other ports
    auth: {
      user: "",
      pass: "",
    },
  });
export const sendVerificationEmail = async (to: string, code: string, description: string): Promise<void> => {
    try {
        const info = await transporter.sendMail({
            from: `"Vero" <${process.env.EMAIL_USER}>`,
            to,
            subject: "Código de Verificación",
            html: `
                <div style="font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f5f5f5;">
                    <table width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); position: relative;">
                        <tr>
                            <td style="padding: 0;">
                                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                    <tr>
                                        <td style="background-color: #4785f7; text-align: center; padding: 30px 20px;">
                                            <div style="width: 60px; height: 60px; border-radius: 50%; background-color: #ffffff; display: inline-block; margin: 0 auto 15px; text-align: center; line-height: 60px;">
                                                <img src="https://ik.imagekit.io/diancrochet/Imagen%20de%20WhatsApp%202025-04-23%20a%20las%2020.17.11_79f7e209.jpg" alt="Logo" style="width: 40px; height: 40px; vertical-align: middle; opacity: 0.8;">
                                            </div>
                                            <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: bold;">Código de Verificación</h1>
                                        </td>
                                    </tr>
                                </table>
                                
                                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                    <tr>
                                        <td style="padding: 40px 30px; position: relative; z-index: 1;">
                                            <p style="font-size: 16px; color: #333333; margin: 0 0 20px 0; line-height: 1.5;">Hemos recibido una solicitud que requiere la verificación de tu identidad.</p>
                                            <p style="font-size: 16px; color: #333333; margin: 0 0 20px 0; line-height: 1.5;">${description}</p>
                                            <p style="font-size: 16px; color: #333333; margin: 0 0 20px 0; line-height: 1.5;">Por favor, utiliza el siguiente código de verificación:</p>
                                            
                                            <!-- Código de verificación -->
                                            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                <tr>
                                                    <td style="padding: 20px 0; text-align: center;">
                                                        <div style="background-color: #f7f9fc; border-radius: 8px; padding: 25px; display: flex; justify-content: center; gap: 10px; width: 100%; max-width: 300px; margin: auto;">
                                                            ${code
                                                                .split("")
                                                                .map(
                                                                    (digit) => `
                                                                    <div style="flex: 1; min-width: 50px; height: 50px; background-color: #ffffff; border: 2px solid #43d3c4; border-radius: 6px; display: flex; align-items: center; justify-content: center; font-size: 24px; font-weight: bold; color: #3187f6;">
                                                                        ${digit}
                                                                    </div>
                                                                `,
                                                                )
                                                                .join("")}
                                                        </div>
                                                    </td>
                                                </tr>
                                            </table>
                                            
                                            <p style="font-size: 14px; color: #666666; margin: 20px 0 0 0; text-align: center;">Este código expirará en 10 minutos.</p>
                                            <p style="font-size: 14px; color: #666666; margin: 20px 0 0 0; text-align: center;">Si no realizaste esta solicitud, puedes ignorar este mensaje.</p>
                                        </td>
                                    </tr>
                                </table>
                                
                                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                    <tr>
                                        <td style="background-color: #3187f6; padding: 20px; text-align: center;">
                                            <p style="color: #ffffff; margin: 0; font-size: 14px;">Si tienes preguntas, contáctanos en <a href="mailto:${process.env.EMAIL_USER}" style="color: #ffffff; text-decoration: underline;">${process.env.EMAIL_USER}</a></p>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                    <table width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; margin: 0 auto;">
                        <tr>
                            <td style="padding: 20px; text-align: center; color: #999999; font-size: 12px;">
                                <p style="margin: 0;">© ${new Date().getFullYear()} Vero. Todos los derechos reservados.</p>
                            </td>
                        </tr>
                    </table>
                </div>
            `,
        });

        console.log("Correo enviado: %s", info.messageId);
    } catch (error) {
        console.error("Error enviando correo:", error);
        if (error instanceof Error) {
            console.error("Error específico:", error.message);
        }
        throw new Error("No se pudo enviar el correo electrónico.");
    }
};
