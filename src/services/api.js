import { create } from 'apisauce';

const api = create({
  baseURL: `http://localhost:3000/api/v1`,
  timeout: 30000
});

api.addAsyncRequestTransform(() => async () => {
  //   const token = await AsyncStorage.getItem('@liveloincentivo:token');
  //   const partnerCode = await AsyncStorage.getItem('@liveloincentivo:partnerCode');
  //   if (token) {
  //     request.headers = {
  //       Authorization: `Bearer ${token}`,
  //       'x-partner-code': partnerCode,
  //       accept: 'application/json',
  //       'content-type': 'application/json'
  //     };
  //   }
});

api.addAsyncResponseTransform(async response => {
  //   const token = await AsyncStorage.getItem('@liveloincentivo:token');
  //   const { exp } = jwtDecode(token);
  //   const expirationDate = moment(new Date(exp * 1000));
  //   const dateNow = momentTz().tz('America/Sao_Paulo');

  //   if (dateNow.isAfter(expirationDate)) {
  //     DropDownHolder.show('error', '', 'Sessão expirada');
  //     await Creators.logout({ navigation: NavigationService });
  //     return false;
  //   }

  if (!response.ok) throw response;

  //   return false;
});

export default api;
