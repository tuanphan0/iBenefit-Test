import {
  AuthenticationAllDto,
  AuthenticationDto,
} from "./dto/AuthenticationDto";
import http from "./httpService";

class TokenAuthService {
  public async getToken(
    item: AuthenticationDto
  ): Promise<AuthenticationAllDto> {
    const { devicecode, email, password } = item;
    const result = await http.post(`/api/auth/login/`, {
      email: email,
      password: password,
    });
    return result.data.data;
  }
}
export default new TokenAuthService();
