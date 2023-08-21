export type LoginDTO = {
    jwtAuthenticationResponse: JwtAuthenticationResponse;
    user: LoginUser;
}

type JwtAuthenticationResponse = {
    token: string;
}

type LoginUser = {
    email: string;
    role: string;
}