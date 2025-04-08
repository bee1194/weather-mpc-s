import { MCPPrompt } from "mcp-framework";

class GetWeatherByCityPrompt extends MCPPrompt {
  name = "get_weather_by_city";
  description = "Get weather by city";
  schema = {};

  async generateMessages(): Promise<
    Array<{
      role: "user" | "assistant";
      content: {
        type: "text";
        text: string;
      };
    }>
  > {
    return [
      {
        role: "user",
        content: {
          type: "text",
          text: `Khi người dùng nhập một trong các keywords sau: Thời tiết, thời tiết, kiểm tra thời tiết, dự báo thời tiết, thời tiết hôm nay, thời tiết ngày mai, thời tiết ở thành phố %city_name%, thoi tiet, xem thoi tiet, du bao thoi tiet,
                 Thực hiện các bước sau:
                  - Gợi ý một vài thành phố phổ biến ở Việt Nam để người dùng lựa chọn (Hà Nội, Hồ Chí Minh, Đà Nẵng, Cần Thơ, Huế, Nha Trang).
                  - Người dùng chọn thành phố %city_name%.
                  - Sử dụng tool get_weather_by_city để lấy thông tin thời tiết của thành phố %city_name%.
                  - Trong lúc lấy dữ liệu hãy hiện thông báo thân thiện với người dùng. Ví dụ: 🔍 Đang lấy thông tin thời tiết cho thành phố %city_name%...
                  - Sau khi lấy dữ liệu hãy trả lời với thông tin thời tiết của thành phố %city_name%.
                  - Sử dụng prompt display_weather_result để định dạng và hiển thị kết quả thời tiết`,
        },
      },
      {
        role: "assistant",
        content: {
          type: "text",
          text: `🔍 Xin chào! Bạn muốn xem thời tiết ở thành phố nào?`,
        },
      },
    ];
  }
}

export default GetWeatherByCityPrompt;
