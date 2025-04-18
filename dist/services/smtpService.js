"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendVerificationEmail = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const transporter = nodemailer_1.default.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT),
    secure: false,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});
const sendVerificationEmail = (to, code, description) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const info = yield transporter.sendMail({
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
                                                <img src="https://ik.imagekit.io/zvju4sp4d/Vero/fondo1.svg?updatedAt=1742177040639" alt="Logo" style="width: 40px; height: 40px; vertical-align: middle; opacity: 0.8;">
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
                .map((digit) => `
                                                                    <div style="flex: 1; min-width: 50px; height: 50px; background-color: #ffffff; border: 2px solid #43d3c4; border-radius: 6px; display: flex; align-items: center; justify-content: center; font-size: 24px; font-weight: bold; color: #3187f6;">
                                                                        ${digit}
                                                                    </div>
                                                                `)
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
    }
    catch (error) {
        console.error("Error enviando correo:", error);
        if (error instanceof Error) {
            console.error("Error específico:", error.message);
        }
        throw new Error("No se pudo enviar el correo electrónico.");
    }
});
exports.sendVerificationEmail = sendVerificationEmail;
