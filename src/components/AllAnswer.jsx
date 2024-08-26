import { useState } from "react";
import "../styles.css";

export const questionList = [
  {
    question: "Reactjs là gì, Ưu nhược điểm?",
    answer: [
      "Là một thư viện JS. Giúp chúng ta tạo các giao diện người dùng dạng single page",
      "Ưu điểm: Có thể tách nhỏ UI thành các component độc lập. Sử dụng JSX. sd VDOM tăng hiệu xuất",
      "Nhược điểm: Vì nó là thư viên nên muốn hoàn chỉnh phải yêu cầu thư viện của bên thứ ba"
    ]
  },
  {
    question: "JSX là gì??",
    answer: [
      "JSX là viết tắt JS XML. Là một cú pháp mở rông của JS.",
      "Cho phép chúng ta có thể viết các code HTML chung một tệp chứa code JS",
      "JSX sẽ biên dịch thành các lời gọi hàm thông thường của JS. Cung cấp 1 cách tiếp cạnh dễ hiểu để tạo các element cho component trong react",
      "Việc tạo element trong react phải sử dụng cú pháp React.createElement. Với việc tạo nhiều element thì sử dụng cú pháp này rất khó. Thay vào đó chúng ta sử dụng JSX",
      "JSX không thể gán trực tiếp cho ReactDOM, vì reactdom chỉ nhận những element được tạo ra bằng cú pháp react.createElement. Nên chúng ta phải qua một bước trung gian đó là babel",
      "Babel là một thư viện JS. dùng trong việc phân tích và chuyển đổi cú pháp trong js. Thường được sd để chuyển đổi cú pháp ES6 trở lên về ES5.",
      "Giúp các trình duyệt có thể chạy được dự án của chúng ta. Bởi vì nhiều trình duyệt cũ không hỗ trợ ES6 trở lên."
    ]
  },
  {
    question: "So sánh Props vs state",
    answer: [
      "Props: là 1 object được truyền vào trong 1 component, và trong component đó props không thể bị thay đổi. Được sd để hiển thị hoặc tính toán",
      "State: là 1 object chứa dữ liệu của 1 component. Chúng ta có thể thay đổi giá trị của state bất cứ khi nào chúng ta mong muốn."
    ]
  },
  {
    question: "DOM và VDOM",
    answer: [
      "DOM: DOM viết tắt của document object model. Sử dụng để truy xuất tài liệu dạng html, xml.",
      "DOM là một api của webapis được cung cấp bởi browser.",
      "ĐOM đại diện cho tài liệu như là 1 cây cấu trúc dữ liệu.",
      "VDOM: là 1 object chứa các thông tin cần thiết đê tạo ra 1 DOM. Chúng ta có thể thao tác với VDOM mà k cần phải tác động trực tiếp tới các phần tử của DOM trên view",
      "Những thay đổi mà ta mong muốn trên DOM sẽ được áp dụng trên DOM ảo trước tiên. React sẽ so sánh VDOM với VDOM trước đó và thư viện reactDOM sẽ cập nhật những gì cần dược cập nhật",
      "Điều này giúp tăng hiệu năng. Chỉ cập nhật những thứ tật sự cần thiết với DOM mà không cần phải update lại một cây DOM lớn"
    ]
  },
  {
    question: "Render và rerender",
    answer: [
      "Render: Là quá trình chạy lần đầu tiên của component khi ta fresh lại trang hoặc mới mở ứng dụng.",
      "Rerender: là quá trình mà component chạy lại khi prop, state thay đổi."
    ]
  },
  {
    question: "Class component và Funtional component",
    answer: [
      "Functional Component: Là một hàm cơ bản của js. Nhận vào các props như là giá trị truyền vào function. Trả về 1 phần tử react",
      "Funtional Component sử dụng useState hook để tạo state và hàm cập nhật là giá trị state",
      "Funtional Component không có cái phương thức vòng đời. sd useEffect hook để quản lý vòng đời",
      "Class Component: Yêu cầu kế thừa react component. Tạo ra 1 function render để trả về phần tử react",
      "Class Component: Chấp nhận props như là giá trị truyền vào constructor. State được khai báo trong constructor và sd setState để cập nhật lại giá trị của state. Có các phương thức vòng đời"
    ]
  },
  {
    question: "Lifecycle trong class component và funtional component",
    answer: [
      "Class component: Gồm 3 giai đoạn: Mouting, updation, unmouting.",
      "Mouting: là quá trình sẽ thực thi khi component chạy lần đầu tiên. Có các pt vòng đợi như componentWillMount, render, componentDidMount. Các phương thức này sẽ lần lượt được gọi",
      "Update: là quá trình sẽ thực thi khi props hoặc state thay đổi.",
      "Có các pt vòng đợi như componentWillReceiveProps, shouldComponentUpdate, componentDidUpdate.",
      "componentWillReceiveProps: sẽ thực thi khi comp con nhận được props từ component cha",
      "shouldComponentUpdate: thực thi trước rerender, sd để ngăn chặn việc rerender của component",
      "componentDidUpdate: thực thi khi component đã rerender",
      "Unmounting: là quá trình sẽ thực thi trước khi component bị xóa khỏi DOM. Có pt vòng đời là componentWillUnmount",
      "Functional component: Sử dụng useEffect hook để quản lí vòng đời",
      "useEffect hook nhận vào 2 tham số: Tham số đầu tiên là 1 callback funtion, tham số thứ 2 là 1 array depedency",
      "useEffect hook sẽ dựa vào array defedency này để đạt được các kết quả tương tự các pt vòng đời của class component",
      "Không truyền array depedency: ue sẽ thực thi sau mỗi lần render và rerender",
      "Truyền 1 mảng rỗng: ue sẽ thực thi một lần duy nhất khi component được render. Giống componentDidMount",
      "Truyền vào prop: sẽ so sánh props, state với props state cũ. nếu khác nhau sẽ thực thi callback ở tham số 1. Không thay đổi thì không có gì xảy ra. Giống shouldComponentUpdate, componentWillReceiveProps, componentDidUpdate",
      "SD return trong ue để đạt được kết quả tương tự componentWillUnmount()"
    ]
  },
  {
    question: "Các hooks trong funtional component, ưu điểm của react hooks?",
    answer: [
      "Ưu điểm: Mang lại sự thuận tiện của component dựa vào class sang component dựa vào function(hooks). Xóa bỏ keyword this và các phương thức vòng đời",
      "useState: sd để tạo ra 1 state và hàm cập nhật lại giá trị của state. us nhận vào 1 giá trị khỏi tạo của state. Trả về 1 mảng gồm 2 phần tử. pt đầu tiên là 1 state, pt 2 là 1 hàm cập nhật lại giá trị state",
      "useEffect",
      "useReducer: sd để quản lý state của 1 component có 1 số lượng lớn state hoặc logic cập nhật state phức tạp",
      "useReducer nhận vào 2 tham số. ts đầu tiên là 1 reducer, tham số thứ 2 là giá trị khởi tạo của state. Trả về 1 mảng gồm 2 pt. pt đầu tiên là state, pt thứ 2 là 1 dispatch",
      "useMemo: sd để ngăn chặn việc tính toán lại một kq nào đó khi component rerender",
      "useCallback: sd để ngăn chặn tạo lại 1 hàm khi component rerender",
      "useRef: trả về 1 thuộc tính current thông qua tham số khởi tạo. Sd để thao tác với các phần tử của DOM",
      "useContext: sd để chia sẽ state giữa các component",
      "useSelector: sd để lấy state trong store bằng cách sd 1 selector funtion",
      "useDispatch: tham chiếu đến function dispatch trong store. sd để truyền đi một action nào đó"
    ]
  },
  {
    question:
      "Redux là gì? Khi nào sd redux? Vì sao phải sd redux? So sánh redux vói context api? Khi nào sd redux, context",
    answer: [
      "Redux: Là 1 công cụ giúp quản lí state và chia sẽ state giữa các component.",
      "Vì sao phải sử dụng redux: SD redux để giải quyết được vấn đề props drilling. Các component ở khắp mọi nơi trong ứng dụng có thể truy cập và thay đổi giá trị của state",
      "Khi nào sd: Khi ứng dụng có 1 số lượng lớn state và giá trị các state này thay đổi liên tục. Logic cập nhật lại giá trí state phức tạp",
      "Các thành phần chính của redux: Action: là các event được tạo ra bằng cách sử dụng funtion và gửi dữ liệu từ ứng dụng lên store",
      "Reducer: là các function sd để lấy state ở store và dữ liệu của action vừa được dispatch để trả về 1 dữ liệu mới của state",
      "Store: là nơi lưu tất cả state và cung cấp các funtion để thao tác với state, dispatch action",
      "Midlewave sử dụng để viết các logic bất đồng bộ trong redux",
      "Redux vói context api: để giải quyết vấn đề props drilling thì chúng ta có thể sử dụng redux or context api nhưng",
      "Redux là 1 state management, có nghĩa là chúng ta có thể theo dõi state theo thời gian. có thể biết được state đã thay đổi như thế nào",
      "Context api chỉ đơn giản là việc chia sẽ state giữa các component",
      "Redux cung cấp nhiều bô công cụ giúp trong việc debug như redux devtool, time travel debugging",
      "Các state trong redux sẽ được gom về 1 store và store dó là duy nhất. điều này thật sự cần thiết với ứng dụng khi mở rông, dễ quản lí state",
      "Với Context api thi các state này nằm ở khắp mọi nơi. khó quản lí khi mở rộng ưd",
      "Sd context khi ứng dụng có quy mô nhỏ, không có quá nhiều state và chỉ muốn chia sẽ state giữa các component.",
      "SD redux khi ứng dụng có quy mô lớn, có 1 số lượng lớn state, ưd phải xử lí nhiều logic cập nhật state khó cần sd đến midlewave, redux devtool"
    ]
  },
  {
    question: "Redux toolkit là gì? Vì sao phải sử dụng react toolkit?",
    answer: [
      "Redux toolkit là 1 thư viện giúp viết redux đơn giản và tốt hơn. Giúp việc cấu hình redux trở nên dễ dàng hơn. Đỡ phải cài các công cụ giúp redux chạy hiệu quả hơn như redux devtool, time travel debugging"
    ]
  },
  {
    question: "SASS/SCSS là gì?",
    answer: [
      "SASS/SCSS là 1 chương trình tiền xử lí css. Giúp viết css như 1 ngôn ngữ lập trình có cấu trúc rõ ràng rành mạch",
      "Có mixin tạo hàm, include để xử dụng hàm, import, loop, condition"
    ]
  },
  {
    question: "BEM là gì?",
    answer: [
      "BEM là 1 chuẩn quy ước đặt tên class trong css.",
      "Block các thành phần chính của trang như header, footer",
      "Element các thành phần chính của block. được quy ước bằng 2 dấu gạch dưới",
      "Modifier: cách thay đổi hiển thị của block or element. được quy ước bằng 2 dấu gạch giữa"
    ]
  },
  {
    question: "Oneway binding là gì? Khác gì với twoway biding",
    answer: [
      "1wb: là khi dữ liệu bị thay đổi ở model thì state ở trong component sẽ thay đổi tương ứng. Và không có chiều ngược lại có nghĩa là khi chúng ta thay đổi state đó ở component thì giá trị ở model sẽ không thay đổi",
      "2wb: là thay dổi ở model thì state ở component thay đổi và ngược lại"
    ]
  },
  {
    question: "React query là gì?",
    answer: [
      "React query là 1 thư viện giúp viết react tốt hơn. nó xử lí phần dữ liệu cần lưu vào bộ nhớ đệm, trạng thái loading và call lại api"
    ]
  },
  {
    question: "HOC là gì?",
    answer: [
      "HOC là 1 kỹ thuật nâng cao trong react. sd để tái sử dụng 1 component. HOC nhận vào 1 component và trả về 1 component"
    ]
  },
  {
    question: "Các cách tiếp cận style trong react?",
    answer: ["inline style, styled component, css module, sass/scss"]
  },
  {
    question: "Keys trong react là gì?",
    answer: [
      "Keys là 1 mã định danh độc nhất. SD để xác định các thành phần nào đã thay đổi hoặc đã bị xóa khỏi danh sách. Xác định được nến render thành phần nào mà không cần phải lần nào cũng render lại cả 1 danh sách"
    ]
  },
  {
    question: "React router là gì?",
    answer: [
      "React router là 1 thư viện định tuyến trong react. Giúp tạo nhiều chế độ hiển thị trong ứng dụng",
      "Khi người dùng nhập vào 1 đường dẫn cụ thể. và đường dẫn đó trùng khớp với bất kì route nào ở trong router thì người dùng sẽ được chuyển đến route đó"
    ]
  },
  {
    question: "Styled component là gì?",
    answer: [
      "Styled component là 1 thư viện giúp tổ chức và quản lí css trong react. Xd với mục đích là giữ cho style của component luôn gắn liền với component đó"
    ]
  },
  {
    question:
      "JS là gì? Các kiểu dữ liệu trong JS? Null khác undefined như thế nào?",
    answer: [
      "JS là 1 ngôn ngữ lập trình dùng để tạo các trang web tương tác. JS được nhúng vào html để trang web trở nên sinh động hơn.",
      "Các kiểu dữ liệu trong JS: Number, string, object, array, null, undefined, boolean",
      "Undefined có nghĩa là giá trị không xác định. khi môt biến được tạo ra nhưng chưa gán giá trị thì biến đó có giá trị là undefined. kiểu dữ liệu của undefined là undefined",
      "Null có nghĩa là giá trị rỗng hoặc là giá trị chưa tồn tại. Kiểu dữ liệu của null là object"
    ]
  },
  {
    question: "So sánh var, let, constant",
    answer: [
      "Một biến được khai báo bằng var or let thì biến đó có thể thay đổi giá trị, constant thì không thay đổi được giá trị",
      "Có tính chất hoisting, let và const không có tính chất hoisting"
    ]
  },
  {
    question: "Scope trong JS",
    answer: [
      "Global scope: biến toàn cục là biến được khai báo bên ngoài bất cứ một function nào hoặc một biến được khai báo trong một function nhưng không sử dụng từ khóa var, let, const thì đó là một biến toàn cục",
      "Block scope chỉ có giả trị trong dấu ngoặc nhọn"
    ]
  },
  {
    question: "Bất đồng bộ là gì? Các cách để xử lí bất đồng bộ?",
    answer: [
      "Là quá trình mà các câu lệnh có thể chạy cùng một lúc mà không phải chờ câu lệnh trước đó",
      "Ưu điểm: tối ưu được thời gian chạy của các câu lệnh",
      "Nhược điểm: vì các câu lệnh này chạy cùng 1 lúc và kq trả về không theo tuần tự nên sẽ khó trong việc kiểm soát và debug",
      "Các phương thức xli bất đồng bộ: callback, promise, async/await",
      "Callback: trong js thì function là 1 object vì vậy nó có thể nhận 1 hàm khác làm tham số truyền vào. Các hàm được truyền dưới dạng tham số và được sd sau đó được gọi là hàm callback. Được sd khi chạy chương trình có 1 câu lệnh bdb, và câu lệnh đó chưa trả về kq ngay thì chúng ta truyền vào 1 cb function để hứng kq khi bdb trả về kq",
      "Promise: là một lời hứa đại diện cho 1 giá trị chưa tốn tại. giá trị đó sẽ trả vè kq trong tương lai. Promise nhận 1 callback function gồm 2 tham số resolve và reject",
      "Async/await: async được đặt trước 1 hàm làm hàm đó trả về 1 promise. Await làm cho 1 câu lệnh đợi 1 promise. As/aw sẽ được thực hiện tuần tự. giúp code trở nên ngắn gọn hơn"
    ]
  },
  {
    question: "Các phương thức xử lí mảng trong JS",
    answer: [
      "concat(): nối mảng, trả về 1 mảng mới, không làm thay đổi mảng ban đầu",
      "filter(): lọc các phần tử trong mảng theo điều kiện. Trả về 1 mảng mới gồm các phần tử thỏa điều kiện, trả về 1 mảng rỗng khi k có pt nào thỏa đk, không làm thay đổi mảng ban đầu",
      "find(): tìm phần tử đầu tiên thỏa đk, k có pt nào thỏa đk trả về undefined. không làm thay đổi mảng ban đầu",
      "indexOf(): lấy vị trị của pt trong mảng. k có thì trả về -1",
      "includes(): ktra xem ptu đó có trong mảng hay không. trả về boolean",
      "reduce(): trả về 1 kết quả cuối cùng mà chúng ta mong muốn. không làm thay đổi mảng ban đầu",
      "map(): duyệt mảng và trả về 1 mảng mới gồm các phần tử đã thay đổi theo mong muốn của chúng ta. không làm thay đổi mảng ban đầu",
      "forEach(): duyệt mảng và không trả về",
      "push: thêm 1 phần tử vào cuối mảng, làm thay đổi mảng ban đầu",
      "pop: lấy ra 1 phần tử cuối mảng, làm thay đổi mảng ban đầu",
      "shift: lấy ra 1 phần tử đầu mảng, làm thay đổi mảng ban đầu",
      "unshift: thêm 1 phần tử vào đầu mảng, làm thay đổi mảng ban đầu"
    ]
  },
  {
    question: "Các features trong ES6,ES7,ES8",
    answer: [
      "default parementer: set một giá trị mặc định cho tham số truyền vào của 1 hàm. nếu hàm đó khi được gọi và không truyền vào tham số này thì hàm mặc định tham số này là gì mà chúng ta đã đặt",
      "rest parameter: khai báo 1 hàm với số lượng tham số không xác định",
      "template literals: là một trình tạo chuỗi cung cấp nhiều tính năng như tạo chuỗi nhiều dòng, nhúng 1 biến vào chuỗi. sd cặp dấu backtick",
      "object literals: giúp khai báo các đối tượng từ các biến",
      "destructuring: là một cú pháp cho phép tách biến từ thuộc tính của đối tượng hay phần tử của 1 danh sách",
      "arrow function, class, module: import và export",
      "block scope",
      "spread operation: sd Copying an array object , nối chuỗi object ",
      "async/await: ES7",
      "Xủ lý object thành mảng: Object.entries(obj) => [[key, value]], Object.keys(obj) => [keys], Object.values(obj) => [value]"
    ]
  },
  {
    question: "Closure là gì?",
    answer: [
      "Closures là một tính năng cho phép function trong JavaScript ghi nhớ và truy cập biến từ phạm vi bên ngoài của nó."
    ]
  },
  {
    question: "Hoisting là gì?",
    answer: [
      "Hoisting là 1 cơ chế của js cho phép các biến, các hàm dù được tạo ở đâu thì đều được đưa lên đầu phạm vi hoạt động của chúng khi code được thực thi."
    ]
  },
  {
    question:
      "Tham trị(primitive type) và tham chiếu(preference types) là gì? Mutate và immutate là gì?",
    answer: [
      "Tham trị là gán luôn giá trị. Tham chiếu là gán địa chỉ nơi lưu giá trị",
      "immutate: là vẫn giữ nguyên giá trị lúc được khai báo và không bị thay đổi",
      "mutate: là vẫn không giữ nguyên giá trị lúc được khai báo và có thể bị thay đổi"
    ]
  },
  {
    question: "This là gì?",
    answer: [
      "This là ngữ cảnh nơi this được gọi",
      "This trong ngữ cảnh toàn cụ: nó sẽ tham chiếu đến đối tượng window",
      "This trong ngữ cảnh funtion: chế độ nghiêm ngặt sẽ là undefined. k nghiêm ngặt nó sẽ tham chiếu đến đối tượng window. Khi function được sd làm hàm khởi tạo thì nó sẽ đại diện cho instance của hàm",
      "This trong ngữ cảnh object: nó sẽ đại diện cho chính object đó",
      "This trong ngữ cảnh event của js: nó sẽ đại diện cho đối tượn html được gắn sk đó"
    ]
  },
  {
    question: "Anonymous function là gì?",
    answer: ["Là hàm ẩn danh được sinh ra vào thời điểm chạy của ctrinh"]
  },
  {
    question: "HOF là gì?",
    answer: [
      "HOF viết tắt của high order funtion. Là 1 hàm nhận vào 1 hàm khác làm tham số truyền vào hoặc trả về 1 hàm",
      "Có 3 tính chất gắn liền với HOF: Currying funtion: thay vì truyền 1 hàm có nhiều tham số truyền vào thì ta viết 1 hàm có 1 tham số truyền vào. closure và callback"
    ]
  },
  {
    question: "Resful API là gì?",
    answer: [
      "Resful API là tập hợp các tiêu chuyển dùng trong việc thiết kế và xây dựng các api cho webservice để việc quản lí các resource trở nên dễ dàng hơn",
      "Các resource này thường được định dạng sẵn bằng json và sd các phương thức http để truyền đi",
      "Rest: là công nghệ giúp chuyển đổi cấu trúc dữ liệu. Là một dạng kiến trúc để viết nên các api. Sử dụng các method như GET, POST, PUT, DELETE",
      "API: là phương thức giúp 2 pm khác nhau có thể giao tiếp được với nhau",
      "Cách hoạt động của resful api: GET để lấy tài nguyên, POST: cập nhật tài nguyên, PUT để tạo tài nguyên, DELETE để xóa tài nguyên"
    ]
  },
  {
    question: "MVC là gì?",
    answer: [
      "MVC là viết tắt của controller view model. Là một mô hình để thiết kế pm thường đc sd để viết các pm có giao diện người dùng",
      "Model: nhận yêu cầu từ controller, thao tác với DB để trả về kq cho controller",
      "Controller: tiếp nhận yêu cầu từ view, giao tiếp với model và trả về kq cho view",
      "View: là giao diện người dùng, tiếp nhận yêu cầu từ người dùng, thao tác với controller để trả về kq cho người dùng",
      "Ưu điểm: tách thành các thành phần độc lập nên giúp dễ phát triển và mở rộng ứng dụng",
      "Nhược: với ứng dụng nhỏ mvc gây cồng kềnh và tốn tg để trung chuyển dữ liệu giữa các thành phần"
    ]
  },
  {
    question: "JSON là gì?",
    answer: [
      "Viết tắt của js object notation. Là một kiểu định dạng dữ liệu theo một quy ước nhất định",
      "JSON là một chuẩn dữ liệu sử dụng trong việc truyền dữ liệu trên web",
      "JSON sử dụng các cặp key value",
      "Kiểu dữ liệu trong JSON có thể là number, string, object, null, boolean"
    ]
  },
  {
    question: "Cách mà webbrowser giao tiếp với webservice?",
    answer: [
      "WB và WS giao tiếp với nhau thông qua giao thức http và thông qua 4 giai đoạn",
      "Tạo kết nối: wb giao tiếp ws nhờ vào địa chỉ internet vào số cổng được đặc tả trong url",
      "Thực hiện yêu cầu: wb gửi yêu cầu tới ws, Việc gửi và nhận theo pthuc get và post ",
      "Phản hổi: ws gửi phản hồi cho wb",
      "Kết thúc kết nối"
    ]
  },
  {
    question:
      "Cách JS hoạt động? Event loop là gì? Cách hoạt động của bất đồng bộ.",
    answer: [
      "JS hoạt động dựa vào engine, webapis, eventloop và calback queue",
      "JS sử dụng V8 engine: V8 engine bao gồm 2 component: memory heap: nơi sẽ xử lí các câu lệnh liên quan đến việc phân bổ vùng nhớ. Callstack nơi mà cáu lệnh thực thi sẽ được ghi ở đây, callstack thực hiện theo quy tắc LIFO",
      "webapis bao gồm các api như DOM, settimeout, ajax... Webapis được cung cấp bởi browser, nơi sẽ xử lí các câu lệnh bất đồng bộ được nhận từ callstack",
      "Eventloop: là một vòng lặp vô tận có nv quan sát callstack và callbackqueue, khi callstack rỗng nó sẽ láy callback từ callbackqueue lên callstack để thực thi.",
      "Callback quêu: là hàng đợi chứa các callback được trả về từ webapis, nó thực hiện theo cơ chế FIFO",
      "JS là 1 ngôn ngữ đơn luồng, nó chỉ có 1 callstack vì vậy nó chỉ thực thi được 1 tác vụ trong 1 lần thực thi.",
      "Khi bắt đầu 1 function, function đó sẽ được push vào callstack, khi function đó kết thúc nó sẽ đươc pop ra khỏi callstack",
      "Nhược điểm của chạy đơn luồng để thực hiện nhiều tác vụ, hoặc tác vụ nặng, tốn tg chạy thì phải chờ đợi thực thi xong tác vụ đó thì mới tới tác vụ khác. Nghĩa là browser sẽ không thể render, dẫn đến ứng dụng trở nên chậm chạp",
      "Giải pháp là sử dụng asynchronus callback. Nó là một non-blocking funtion",
      "Khi một tác vụ bất đồng bộ được push vào callstack, tác vụ đó sẽ được chuyển qua webapis để xử lí, sau khi câu lệnh bdb hoàn tất thì webapi sẽ trả về 1 callback và đẩy nó vào trong callback queue",
      "Lúc này eventloop sẽ theo dõi callstack và callbackqueue, khi callstack rỗng nó sẽ láy callback từ callbackqueue lên callstack để thực thi."
    ]
  },
  {
    question: "Regular funtion và arrow function.",
    answer: [
      "Arrow function sử dụng dấu => để khai báo. regular Function sử dụng keyword funtion để khai báo",
      "Khi af chỉ có 1 tham số truyền vào thì nó có thể bỏ qua được cặp dấu ngoặc đơn, khi chỉ có 1 câu lệnh return thì nó có thể bỏ qua cặp dấu nhọn và keyword return",
      "AF không tự định nghĩa this của riêng nó. Vì vậy nó không phù hợp làm method cho object",
      "AF không có thuộc tính prototype.",
      "AF không tự dịnh nghĩa arguments của chính nó. thay vào đó chúng ta sử dụng rest parameters",
      "AR không thể sử dụng làm hàm constructor",
      "AR không có thuộc tính hoisting"
    ]
  },
  {
    question: "Angular vs react.",
    answer: [
      "Angular sd DOM, react sd DOM ảo",
      "Angular sd 2wb, react sd sd 1wb",
      "Angular: Các template html được tách ra thành các file riêng với logic. React thì viết chung logic với các template",
      "React import một component đơn giản hơn. Angular muốn sử dụng 1 component trong 1 component phải khai báo component đó trong module",
      "Định tuyến trong react đơn giản hơn. Chỉ cần đóng gói tất cả route bao gồm index route. và chỉ ra đường dẫn phù hợp với từng component",
      "Với angular ta phải tách route ra riêng 1 route module. Và chỉ ra đường dẫn phù hợp với từng module. Trong từng module đó là chỉ ra từng route phù hợp với từng component"
    ]
  },
  {
    question: "React 18 có gì mới?",
    answer: [
      "Concurency: Là cơ chế render mới của react. Cho phép react có thể can thiệp vào 1 tiến trình rendering. Thay vì cập nhật render cho từng cái thì có thể chạy cùng 1 lúc, và trong quá trình cập nhật đó react có thể quyết định việc tạm dừng, tiếp tục hoặc hủy bỏ 1 trong các cập nhật",
      "Automatic batching: Nhóm các cập nhật state trong 1 lần render. Cơ chế này đã có trong version 17 nhưng chỉ được áp dụng ở trong 1 eventhandle, với vs18 thì đã có thể được áp dụng ở khắp mọi nơi",
      "Transition: có 2 kiểu cập nhật: urgent updates: những cập nhật cần được cập nhật ngay lập tức trên UI. Transition: nhưng cập nhật có thể thực hiện từ từ. Không cần thiết phải cập nhật ngay",
      "VD có 1 input tìm kiếm, khi chúng ta nhập vào một text, thì text đó cần phải cập nhật ngay(urgent updates), nhưng hiển thị kết quả tìm kiếm không cần trả ra kq ngay mà có thể chờ nhập xong mới trả kq(transition updates)",
      "Transition là cập nhật có độ ưu tiên thấp, được bọc ở trong 1 startTransion(() => {setState()}). Đây là cơ chế concurency",
      "Các hooks mới: useId() sd để tạo ra 1 id mới. VD có 1 form được tách ra thành 1 component. Trong form này có 1 input và 1 label sử dụng id để khi click vào label sẽ focus vào input. Sử dụng component form ở 1 component khác 2 lần. Nếu không sử dụng useId thì khi click vào label ở component thứ 2 sẽ bị focus vào input ở component 1 bởi vì nó bị trùng id.",
      "useTransition: trả về 1 mảng gồm 2ptu ptu 1 là biến kiểm tra xem react có đang can thiệp vào tiến trình render không, pt2 là 1 transition dùng để bọc 1 những cập nhật chưa cần phải update ngay"
    ]
  },
  {
    question: "Các design pattern trong JS?",
    answer: [
      "Constructor pattern: là phương thức được sử dụng để khởi tạo các đối tượng mới: tạo 1 object var object = {}; khởi tạo 1 constructor bằng function: function Person() {}; const personA = new Person();",
      "Module Design Pattern: là một design pattern sinh ra để tuân thủ tính bao đóng như các ngôn ngữ lập trình OOP để tránh các truy cập, chỉnh sửa trái phép",
      `function AnimalContainter () {

        const container = [];
  
        function addAnimal (name) {
            container.push(name);
        }
  
        function getAllAnimals() {
            return container;
        }
  
        function removeAnimal(name) {
            const index = container.indexOf(name);
            if(index < 1) {
                throw new Error('Animal not found in container');
            }
            container.splice(index, 1)
        }
  
        return {
            add: addAnimal,
            get: getAllAnimals,
            remove: removeAnimal
        }
    }
    const dogContainer = AnimalContainter();
    dogContainer.add('Hen');
    dogContainer.add('Goat');
    dogContainer.add('Sheep');
  
    console.log(dogContainer.container) // undefined
    console.log(dogContainer.get()) //Array(3) ["Hen", "Goat", "Sheep"]
    dogContainer.remove('Sheep')
    console.log(dogContainer.get()); //Array(2) ["Hen", "Goat"]
    `,
      "Singleton Pattern: là một điều cần thiết chỉ được khởi tạo một lần ví dụ như việc kết nối database.",
      `function DatabaseConnection() {

      let databaseInstance = null;
  
    // tracks the number of instances created at a certain time
        let count = 0;
  
        function init() {
            // console.log(Opening database #);
    //now perform operation
        }
  
        function createIntance() {
            if (databaseInstance == null) {
                databaseInstance = init();
            }
            return databaseInstance;
        }
  
        function closeIntance() {
            console.log('closing database');
            databaseInstance = null;
        }
  
        return {
            open: createIntance,
            close: closeIntance
        }
    }
  
    const database = DatabseConnection();
    database.open(); //Open database #1
    database.open(); //Open database #1
    database.open(); //Open database #1
    database.close(); //close database`,
      "Observer Pattern: cung cấp cho chúng ta một mô hình cơ bản bao gồm Subscribe, Unsubscribe và Notify.",
      "vd: Bạn có bao giờ Đăng ký nhận tin ở trang web nào chưa?. Chắc hẵn là rồi, khi bạn đăng ký nhận tin, địa chỉ email của bạn sẽ được lưu xuống hệ thống. Khi blog, tạo bài viết mới, bạn sẽ nhận được thông báo về nó. Đây là Observer. ",
      `class Observable {
      constructor() {
        this.observers = [];
      }
      // Đăng ký nhận tin
      subscribe(subscriber) {
        this.observers.push(subscriber);
      }
  
      // Huỷ đăng ký nhận tin
      unsubscribe(subscriber) {
        this.observers = this.observers.filter(
          (observer) => observer !== subscriber
        );
      }
  
      // Thông báo khi có bài viết mới
      notify(data) {
        this.observers.forEach((observer) => {
          observer(data);
        });
      }
    }
  
    const usersSubscribe = new Observable();
  
    const userOne = (data) => console.log("Subscriber 1 " + data);
    const userTwo = (data) => console.log("Subscriber 2 " + data);
    const userThree = (data) => console.log("Subscriber 3 " + data);
  
    usersSubscribe.subscribe(userOne); // Người đăng ký
    usersSubscribe.subscribe(userTwo); // Người đăng ký
    usersSubscribe.subscribe(userThree); // Người đăng ký
    usersSubscribe.unsubscribe(userOne); // Người huỷ đăng ký
  
    usersSubscribe.notify("được thông báo bài viết mới");`
    ]
  },
  {
    question: "NextJS là gì? Tại sao nên sử dụng nextjs? Ưu nhược điểm?",
    answer: [
      "Next.js là một framework được phát triển trên nền của React. Chính vì dựa trên nền của React nên Next.js mang những cốt lõi tương tự như React. Next.js cung cấp cho chúng ta những ưu thế mới và vượt trội mà ở React không có được. Next.js giúp các nhà phát triển tạo ra các ứng dụng có hiệu suất tốt và web tĩnh siêu nhanh. Điều này được chứng minh khi các tên tuổi lớn đang sử dụng Next.js như: Netflix, Uber, GitHub, Twitch,",
      "NextJS cung cấp cho chúng ta: ",
      "Image Optimization: Tự động tối ưu hóa hình ảnh, cho phép thay đổi kích thước. Chuyển hình ảnh lớn đến các thiết bị nhỏ hơn. Tối ưu hóa hình ảnh theo yêu cầu, điều này không làm giảm tốc độ tải cảu website.",
      "Internationalization: Hỗ trợ đinh tuyến quốc tế từ bản v10.0.0 . Bạn có thể cung cấp các ngôn ngữ, ngôn ngữ mặc định và ngôn ngữ miền cụ thể. Next.js sẽ tự động xử lí việc định tuyến.",
      "Next.JS Analytics: Với việc điều cần thiết cho sự phát triển khi kiểm tra xem người dùng đang trải nghiệm ứng dụng như thế nào. Next.JS cung cấp tính năng với chế độ xem Analytics, giúp bạn có được thông tin về điểm số và dữ liệu thay đổi tổng quan.",
      "Zero Config: Tự động thực hiện biên dịch và đóng gói tự động. Tối ưu hóa cho sản phẩm ngay từ đầu.",
      "Hybrid SSG và SSR : Sử dụng cơ chế Pre-render để buil-time và request time ở (SSR) trong dự án Single.",
      "Incremental Static Regeneration: Next.js cho phép bạn tạo hoặc cập nhật các trang tĩnh sau khi xây dựng trang web của mình. Tái tạo tĩnh tăng dần cho phép bạn sử dụng tạo tĩnh trên nền mà không cần phải xây dựng lại toàn bộ trang web.",
      "TypeScript Support:  Tự động hỗ trợ cấu hình TypeScript và biên dịch",
      "Fast Refresh: Một tính năng cực kì hay và thú vị cho phép phản hồi tức thời về các chỉnh sửa được thực hiện đối với các thành phần trên dự án của bạn. Đỉnh điểm là chỉnh sửa các hiển thị nhanh trong vòng một đến hai giây mà không làm mất trạng thái hiện tại.",
      "File-system Routing:  Next.js cung cấp cho chúng ta một bộ định tuyến dựa trên hệ thống các tệp được xây dựng về trang (pages). Khi tệp được thêm vào thư mục pages, nó sẽ được tạo dựng sẳn dưới dạng một tuyến. Các tệp bên trong có thể được sử dụng hầu hết phổ biến.",
      "Built-In CSS Support: Next.js cho phép bạn nhập tệp CSS từ môt tệp Javascript. Bạn chỉ cần tạo 1 file CSS và import trực tiếp nó vào file Javascript. Và mọi thứ bắt đầu hoạt  động như cách chúng ta muốn.",
      "Code-splitting and Bundling:  Hỗ trợ thuật toán tách gói được tối ưu hóa được tạo bởi nhóm Google Chrome."
    ]
  }
];

export default function AllAnswer() {
  const [questions, setQuestions] = useState([...questionList]);
  return (
    <div className="App">
      {questions.map((element, index) => {
        return (
          <div key={index}>
            <h3>{element.question}</h3>
            <div
              className={`answer-${index}`}
              style={{ borderBottom: "1px solid #fff" }}
            >
              {element.answer &&
                element.answer.length &&
                element.answer.map((element1, index1) => (
                  <p key={index1}>{element1}</p>
                ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
