import { MCPPrompt } from "mcp-framework";

class DisplayWeatherResultPrompt extends MCPPrompt {
  name = "display_weather_result";
  description = "Display weather results clearly";
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
          text: `Tổ chức thông tin thành các phần rõ ràng với tiêu đề:

                # Thông tin thời tiết %city_name%

                ## Điều kiện hiện tại
                - 🌡️ Nhiệt độ: [nhiệt độ tính bằng °C, làm tròn 1 chữ số thập phân]
                - 🔥 Cảm giác như: [nhiệt độ cảm nhận tính bằng °C, làm tròn 1 chữ số thập phân]
                - 💧 Độ ẩm: [giá trị]%
                - ☀️ Thời tiết: [mô tả thời tiết]
                - ⬇️ Áp suất: [giá trị] hPa

                ## Gió
                - 💨 Tốc độ gió: [giá trị] m/s
                - 🧭 Hướng gió: [giá trị]°

                ## Tầm nhìn
                - 👁️ Tầm nhìn: [giá trị] km

                ## Mặt trời
                - 🌅 Bình minh: [thời gian mặt trời mọc, định dạng giờ:phút:giây]
                - 🌇 Hoàng hôn: [thời gian mặt trời lặn, định dạng giờ:phút:giây]

                ## Kết luận

                Thêm nhận xét ngắn gọn về điều kiện thời tiết hiện tại và thời gian lấy dữ liệu.

                Nếu có lỗi khi lấy dữ liệu, hãy trả lời với thông báo: "❌ Rất tiếc, không thể lấy thông tin thời tiết cho thành phố %city_name%. Vui lòng kiểm tra lại tên thành phố hoặc thử lại sau."`,
        },
      },
    ];
  }
}

export default DisplayWeatherResultPrompt;
