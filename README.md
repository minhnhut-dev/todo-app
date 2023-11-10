# Hướng dẫn Cài đặt và Khởi tạo Ứng dụng React

Dưới đây là các bước để bắt đầu một ứng dụng React từ đầu.

## Bước 1: Cài đặt Node.js và npm

React yêu cầu Node.js và npm để chạy. npm là trình quản lý gói của Node.js, cho phép bạn cài đặt các thư viện và công cụ khác.

### Cài đặt Node.js
- Ubuntu: https://azdigi.com/blog/en/linux-server-en/web-server/how-to-install-node-js-with-nvm-on-ubuntu-22-04/
- Macos: https://tecadmin.net/install-nvm-macos-with-homebrew/

### Kiểm tra cài đặt
Mở terminal hoặc command prompt và chạy lệnh sau:

```bash
node -v
npm -v
```
### Tạo ứng dụng react mới
   - npx create-react-app ''tên ứng dụng''
   - cd my-react-app
   - npm start

### Giới thiệu reactJS
   ReactJS là gì: React là một thư viện JavaScript mã nguồn mở dùng để xây dựng giao diện người dùng, đặc biệt là cho các ứng dụng web đơn trang. Nó cho phép phát triển giao diện người dùng trong hình thức các components độc lập, có thể tái sử dụng, và quản lý trạng thái riêng của chúng.
  - Các đặc điểm chính của State trong React:   
     -  State được quản lý bởi React Component, thay vì bị control bởi DOM như truyền thống.
     -  Khi State thay đổi, Component sẽ re-render lại UI một cách tự động.
     - State là private cho mỗi Component, nó không thể truy cập hay thay đổi State của Component khác.
     -  State có thể được khởi tạo ban đầu và cập nhật bằng phương thức setState().
     -  Không nên thay đổi State trực tiếp, luôn phải dùng setState().
     -  Các phương thức this.state và setState() chỉ có trong Component Class, không có trong Function Component.
      State cùng với Props định nghĩa ra user interface của Component.
  - Các đặc điểm chính của props trong React:
    - Props (viết tắt của properties) trong React là các thuộc tính được truyền từ component cha sang component con.
    - Props là read-only, nghĩa là không thể thay đổi giá trị của props từ component con.
    - Props có thể được sử dụng để truyền dữ liệu giữa các component.
    - Props chỉ được set ở component cha, được sử dụng ở component con.
