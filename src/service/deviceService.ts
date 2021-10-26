import http from "./httpService";

class DeviceService
{
    public async createDevice(device:number){
        const result = await http.post("/api/device/init",device);
        return result.data;
    }
}
export default new DeviceService();
// export const setCookies = (name, value, expires) => {
//     let d = new Date();
//     d.setTime(d.getTime() + expires * 1000);
  
//     cookies.set(name, value, { path: "/", expires: d });
//   };