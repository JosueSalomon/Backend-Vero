"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Auth_controller_1 = require("../Controllers/Auth.controller");
const router = express_1.default.Router();
/**
* @swagger
* tags:
*   - Auth
* /auth/login:
*   post:
*     summary: User login with token creation
*     description: Authenticates a user with their email and password. If credentials are valid, a JSON Web Token (JWT) is generated and returned for session management..
*     operationId: loginUser
*     requestBody:
*       description: User email and password.
*       required: true
*       content:
*         application/json:
*           schema:
*             type: object
*             required:
*               - email
*               - password
*             properties:
*               email:
*                 type: string
*                 description: User email.
*                 example: "tommy@gmail.com"
*               password:
*                 type: string
*                 description: User password.
*                 example: "p@ssw0rd"
*     responses:
*       201:
*         description: Successful login.
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 data:
*                   type: object
*                   description: Login response details.
*                   properties:
*                     names:
*                       type: string
*                       description: User's full name.
*                     email:
*                       type: string
*                       description: User's email.
*                     profile_img_url:
*                       type: string
*                       description: URL of the user's profile picture.
*                     user_type_id:
*                       type: integer
*                       description: User type (1 = Driver, 2 = Passenger, 3 = Admin).
*                     message:
*                       type: string
*                       description: Response message (e.g., 'User found successfully').
*                       example: "User found successfully"
*                     code:
*                       type: integer
*                       description: Status code indicating the result.
*                       example: "1"
*                     token:
*                       type: string
*                       description: Authentication token for the user.
*                       example: "yJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxMSwibmFtZXMiOiJUb21teSBNYXRhbW9yb3MiLCJlbWFpbCI6InRvbW15QGdtYWlsLmNvbSIsImltZyI6Imh0dHBzOi8vcmFuZG9tdXNlci5tZS9hcGkvcG9ydHJhaXRzL21lbi8xLmpwZyIsImlhdCI6MTc0MjE3"
*       2:
*         description: User does not exist.
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 code:
*                   type: integer
*                   description: validation code.
*                   example: "2"
*                 message:
*                   type: string
*                   description: User does not exist.
*                   example: "User does not exist"
*       3:
*         description: User not validated.
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 code:
*                   type: integer
*                   description: validation code.
*                   example: "3"
*                 message:
*                   type: string
*                   description: User not validated.
*                   example: "User not validated"
*       4:
*         description: Invalid credentials.
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 code:
*                   type: integer
*                   description: validation code.
*                   example: "4"
*                 message:
*                   type: string
*                   description: Invalid credentials.
*                   example: "Invalid credentials"
*/
router.post('/login', Auth_controller_1.Login);
exports.default = router;
