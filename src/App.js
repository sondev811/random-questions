import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import './styles.css'

export const questionList = [
  {
    question: 'Reactjs là gì, Ưu nhược điểm?',
    answer: [
      {
        data: 'Là một thư viện JS. Giúp chúng ta tạo các giao diện người dùng dạng single page',
        isPre: false
      },
      {
        data: 'Ưu điểm: Có thể tách nhỏ UI thành các component độc lập. Sử dụng JSX. sd VDOM tăng hiệu xuất',
        isPre: false
      },
      {
        data: 'Nhược điểm: Vì nó là thư viên nên muốn hoàn chỉnh phải yêu cầu thư viện của bên thứ ba',
        isPre: false
      }
    ]
  },
  {
    question: 'JSX là gì??',
    answer: [
      {
        data: 'JSX là viết tắt JS XML. Là một cú pháp mở rông của JS.',
        isPre: false
      },
      {
        data: 'Cho phép chúng ta có thể viết các code HTML chung một tệp chứa code JS',
        isPre: false
      },
      {
        data: 'JSX sẽ biên dịch thành các lời gọi hàm thông thường của JS. Cung cấp 1 cách tiếp cạnh dễ hiểu để tạo các element cho component trong react',
        isPre: false
      },
      {
        data: 'Việc tạo element trong react phải sử dụng cú pháp React.createElement. Với việc tạo nhiều element thì sử dụng cú pháp này rất khó. Thay vào đó chúng ta sử dụng JSX',
        isPre: false
      },
      {
        data: 'JSX không thể gán trực tiếp cho ReactDOM, vì reactdom chỉ nhận những element được tạo ra bằng cú pháp react.createElement. Nên chúng ta phải qua một bước trung gian đó là babel',
        isPre: false
      },
      {
        data: 'Babel là một thư viện JS. dùng trong việc phân tích và chuyển đổi cú pháp trong js. Thường được sd để chuyển đổi cú pháp ES6 trở lên về ES5.',
        isPre: false
      },
      {
        data: 'Giúp các trình duyệt có thể chạy được dự án của chúng ta. Bởi vì nhiều trình duyệt cũ không hỗ trợ ES6 trở lên.',
        isPre: false
      }
    ]
  },
  {
    question: 'So sánh Props vs state',
    answer: [
      {
        data: 'Props: là 1 object được truyền vào trong 1 component, và trong component đó chỉ có thể được đọc mà không thể thay đổi được các dữ liệu của props.',
        isPre: false
      },
      {
        data: 'State: là dữ liệu động chưa thông tin của component. Chúng ta có thể thay đổi giá trị của state khi nào chúng ta mong muốn.',
        isPre: false
      }
    ]
  },
  {
    question: 'DOM và VDOM',
    answer: [
      {
        data: 'DOM: DOM viết tắt của document object model. Sử dụng để truy xuất tài liệu dạng html, xml.',
        isPre: false
      },
      {
        data: 'DOM là một api của webapis được cung cấp bởi browser.',
        isPre: false
      },
      {
        data: 'DOM đại diện cho tài liệu như là 1 cây cấu trúc dữ liệu.',
        isPre: false
      },
      {
        data: 'VDOM: là 1 object chứa các thông tin cần thiết đê tạo ra 1 DOM. Chúng ta có thể thao tác với VDOM mà k cần phải tác động trực tiếp tới các phần tử của DOM trên view',
        isPre: false
      },
      {
        data: 'Những thay đổi mà ta mong muốn trên DOM sẽ được áp dụng trên DOM ảo trước tiên. React sẽ so sánh VDOM với VDOM trước đó và thư viện reactDOM sẽ cập nhật những gì cần dược cập nhật',
        isPre: false
      },
      {
        data: 'Điều này giúp tăng hiệu năng. Chỉ cập nhật những thứ tật sự cần thiết với DOM mà không cần phải update lại một cây DOM lớn',
        isPre: false
      }
    ]
  },
  {
    question: 'Redux Thunk và Redux saga',
    answer: [
      {
        data: 'Middleware để sử dụng để thao tác với các câu lệnh bất đồng bộ ở trong redux. Ví dụ gọi api, hoặc sử dụng các hàm setTimeout. Tất cả những việc đó được gọi chung là side effects'
      },
      {
        data: `redux-thunk:
export const actionGetUser = (users) => { //action
  return {
    type: Types.GET_USERS,
    users
  }
}
export const actionAddUser = (user) => { //action
  return {
    type: Types.ADD_USER,
    user
  }
}
export const getUsers = () => async dispatch => { // async thunk
  const response = await axios.get('/users'); // call api
  dispatch(actionGetUser(response)); sau đó mới dispatch 
};
export const createUsers = (info) => async dispatch => { // async thunk
  const response = await axios.post('/users', info, { headers: {...}}); // call api
  dispatch(actionAddUser(response)); sau đó mới dispatch 
};
su dung: dispatch(getUsers);
su dung: dispatch(addUser({ name: '123', age: 16 }));
`,
        isPre: true
      },
      {
        data: 'takeEvery() : thực thi và trả lại kết quả của mọi actions được gọi.',
        isPre: false
      },
      {
        data: 'takeLastest() : chỉ cho phép một hàm xử lý có thể chạy tại một thời điểm. không cho phép thực hiện đồng thời như với takeEvery.  Nếu có một action khác được phát đi trong khi hàm xử lý vẫn đang chạy thì nó sẽ hủy bỏ xử lý hiện tại và sẽ tiếp tục chạy với action mới.',
        isPre: false
      },
      {
        data: 'take(): được sử dụng để tạm dừng việc thực thi của saga cho đến khi một action cụ thể được dispatch.',
        isPre: false
      },
      {
        data: `function* handleLogin(user) {
  // Đợi action 'LOGIN_REQUEST' được dispatch
  const action = yield take('LOGIN_REQUEST');
  
  // Gọi hàm để xử lý logic đăng nhập
  const result = yield call(async () => {
    return await axios.post("https://fakestoreapi.com/user/login", user)
  });
}
}`,
        isPre: true
      },
      { data: 'put(): dispatch một action', isPre: false },
      { data: 'call(): bắn api', isPre: false },
      { data: 'all(): là cách để chạy các effect một cách song song', isPre: false },
      {
        data: `import { call } from 'redux-saga/effects'
const todos = yield call(fetch, '/api/todos');
const user = yield call(fetch, '/api/user');
// Effect thứ 2 sẽ không được thực hiện cho đến khi effect thứ nhất được giải quyết.
// Thay vào đó sử dụng all
const [todos, user]  = yield all([
  call(fetch, '/api/todos'),
  call(fetch, '/api/user')
]);
`,
        isPre: true
      },
      { data: 'tạo function với dấu *', isPre: false },
      {
        data: `function* watchGetAllRecruit() {
  try {
    const result = yield call(async () => {
      return await axios.get("https://fakestoreapi.com/products/category/jewelery")
    });

    if (result && result.success) {
      yield put({ type: "GET_ALL_RECRUIT_SUCCESS", payload: result });
    } else {
      yield put({ type: "GET_ALL_RECRUIT_FAILURE" });
    }
  } catch (error) {
    yield put({
      type: "GET_ALL_RECRUIT_FAILURE",
      payload: error.response.message,
    });
  }
}

function* Saga() {
  yield takeEvery(GET_ALL_RECRUIT, watchGetAllRecruit); // phép thực hiện đồng thời. Tại cùng một thời điểm, 
  //chúng ta có thể gọi đến watchGetAllRecruit mới mà không cần quan tâm tác vụ watchGetAllRecruit đó đã hoàn thành hay chưa.
}
export default Saga;
//sử dụng dispatch({type: "GET_ALL_RECRUIT"})
`,
        isPre: true
      }
    ]
  },
  {
    question: 'Thao tác với DOM',
    answer: [
      {
        data: 'Truy cập phần tử DOM: getElementById, getElementByClassName, getElementsByTagName',
        isPre: false
      },
      {
        data: 'Sửa đổi nội dung phần tử: element.innerHTML = content, nhiều phần tử thì element.innerHTML += content ',
        isPre: false
      },
      {
        data: "Sự kiện và Xử lý sự kiện: add event listeners: element.addEventListener('click', cbfn)",
        isPre: false
      },
      {
        data: "Thao tác với style: element.style.color = 'blue';",
        isPre: false
      },
      {
        data: "Tạo và sửa đổi các thành phần: document.createElement('p'), newParagraph.textContent = 'This is a new paragraph.'; document.body.appendChild(newParagraph);",
        isPre: false
      },
      {
        data: "Sửa đổi thuộc tính: element.attribute = '', vd: image.src = '123.jpg'",
        isPre: false
      },
      { data: 'Cập nhật form input value:', isPre: false },
      {
        data: `const myInput = document.getElementById('myInput');
myInput.addEventListener('input', function() {
  document.getElementById('inputValue').textContent = myInput.value;
});`,
        isPre: true
      },
      {
        data: "Thao tác với DOM trước khi nó sẵn sàng: document.addEventListener('DOMContentLoaded', function() {});",
        isPre: false
      },
      {
        data: 'Luôn kiểm tra xem một phần tử có tồn tại hay không trước khi thao tác với nó:',
        isPre: false
      },
      { data: 'if (myElement) { //Thao tác vs DOM }', isPre: false }
    ]
  },
  {
    question: 'GraphQL là gì',
    answer: [
      {
        data: 'Vấn đề của resfulapis: Over fetching: Khi có 1 endpoint /api/blog/1 và request endpoint sẽ được trả về dữ liệu { title, des...}, nhưng ở client chỉ sử dụng một vài dữ liệu trong đó, còn lại thì không sử dụng. vd chỉ lấy tiltle thì bị dư thừa.',
        isPre: false
      },
      {
        data: 'Under fetching: một request không thể đủ thông tin, cần fetching thêm api khác để lấy thông tin, vd khi có 1 endpoint /api/blog/1 và request endpoint sẽ được trả về dữ liệu { title, des }, mà chúng ta cần thêm field categories, comments...(categories, comments là 2 bảng khác) sử dụng thì phải viết thêm endpoint hoặc phải yêu cầu và đợi phía backend làm xong mới thực hiện intergrate',
        isPre: false
      },
      {
        data: 'Là 1 ngôn ngữ truy vấn apis, deploy một endpoint duy nhất và client có thể quyết định việc lấy những dữ liệu nào cần thiết.',
        isPre: false
      },
      {
        data: ` {
  products { // chỉ lấy id và name
    id,
    name
  }
  products(id: 1) { // lấy product id là 1: chỉ lấy name
    name
  }
  products(first: 2) { // 2 product đầu tiên
    name
  }
  products(offset: 2) { // lấy product trang 2
    name
  }
  products(limit: 2) { // chỉ lấy 2 product
    name
  }
}
        `,
        isPre: true
      }
    ]
  },
  {
    question: 'Render và Rerender',
    answer: [
      {
        data: 'Render: Render là quá trình mà React thực hiện để hiển thị các nội dung trên giao diện người dùng dựa trên props và state.',
        isPre: false
      },
      {
        data: 'Để hiển thị giao diện trên trình duyệt, tiến trình của React thông qua 2 giai đoạn chính:',
        isPre: false
      },
      {
        data: 'Giai đoạn Render: Giai đoạn này bao gồm các công việc liên quan đến khởi tạo hoặc tính toán thay đổi component trước khi hiển thị trên DOM. React sử dụng thuật toán React Fiber dựa trên cơ chế bất đồng bộ (asynchronous) để tính toán sự thay đổi.',
        isPre: false
      },
      {
        data: 'Giai đoạn Commit: Quá trình dựa trên cơ chế đồng bộ (synchronous) để thực hiện các thay đổi trên DOM.',
        isPre: false
      },
      {
        data: 'Khi React cập nhật DOM ở quá trình commit, nó đồng thời cập nhật toàn bộ các tham chiếu (refs) thích hợp để trỏ đến các DOM node hay các component đã được gọi.',
        isPre: false
      },
      {
        data: 'Tiếp theo nó mới chạy đồng bộ useLayoutEffect nếu có và cuối cùng React đặt một khoảng timeout ngắn, khi hết hạn, nó sẽ chạy toàn bộ useEffect nếu có',
        isPre: false
      },
      {
        data: 'Rerender: là lần render thứ hai và bất kỳ render tiếp theo cho đến khi component được unmount khỏi DOM khi state hoặc props thay đổi, component cha rerender, thay đổi url khi sử dụng router',
        isPre: false
      },
      {
        data: 'Trình tự: User tương tác với App. VD: Click vào một button => cập nhật state => cập nhật DOM => gọi cleanup useLayoutEffect=> gọi useLayoutEffect => render lại UI, UI được thay đổi trên màn hình(render trong return) => gọi cleanup useEffect => gọi useEffect',
        isPre: false
      },
      {
        data: `const App = () => {
  const [count, setCount] = useState(0);

  useLayoutEffect(() => {
    if (count > 3) {
      setCount(0);
    }
    return () => {
    console.log('Cleanup layouteffect');
    };
  }, [count]);
  
  useEffect(() => {
    console.log('useEffect called');
    if (count > 3) {
      setCount(0);
    }
    // nếu array depedency là rỗng thì cleanup chỉ được gọi khi component bị unmounted khỏi DOM
    // còn nếu array depedency có giá trị thì console.log('Cleanup useeffect'); sẽ được gọi trước  console.log('useEffect called');
    return () => {
      console.log('Cleanup useeffect');
    };
  }, [count]);

  const handleClick = () => {
    setCount(count + 1);
  }

  return (
  // khi tăng count lên 4 thì sẽ được render số 4 trước khi useEffect thực thi, 
  // render xong thì useEffect thực thi để cập nhật lại count = 0 dẫn đến tình trạng nhấp nháy mặc dù không ảnh hưởng quá nhiều
    <p>{count}</p>
    <button onClick={handleClick}>Click me</button>
  )
}`,
        isPre: true
      }
    ]
  },
  {
    question: 'Class component và Funtional component',
    answer: [
      {
        data: 'Functional Component: Là một hàm cơ bản của js. Nhận vào các props như là giá trị truyền vào function. Trả về 1 phần tử react',
        isPre: false
      },
      {
        data: 'Funtional Component sử dụng useState hook để tạo state và hàm cập nhật là giá trị state',
        isPre: false
      },
      {
        data: 'Funtional Component không có cái phương thức vòng đời. sd useEffect hook để quản lý vòng đời',
        isPre: false
      },
      {
        data: 'Class Component: Yêu cầu kế thừa react component. Tạo ra 1 function render để trả về phần tử react',
        isPre: false
      },
      {
        data: 'Class Component: Chấp nhận props như là giá trị truyền vào constructor. State được khai báo trong constructor và sd setState để cập nhật lại giá trị của state. Có các phương thức vòng đời',
        isPre: false
      }
    ]
  },
  {
    question: 'Webpack',
    answer: [
      {
        data: 'Giúp chúng ta module hoá ứng dụng, webpack chúng ta minize file để tối ưu sản phẩm.',
        isPre: false
      },
      {
        data: 'Funtional Component sử dụng useState hook để tạo state và hàm cập nhật là giá trị state',
        isPre: false
      },
      {
        data: 'Funtional Component không có cái phương thức vòng đời. sd useEffect hook để quản lý vòng đời',
        isPre: false
      },
      {
        data: 'Class Component: Yêu cầu kế thừa react component. Tạo ra 1 function render để trả về phần tử react',
        isPre: false
      },
      {
        data: 'Class Component: Chấp nhận props như là giá trị truyền vào constructor. State được khai báo trong constructor và sd setState để cập nhật lại giá trị của state. Có các phương thức vòng đời',
        isPre: false
      }
    ]
  },
  {
    question: 'Lifecycle trong class component và funtional component',
    answer: [
      {
        data: 'Class component: Gồm 3 giai đoạn: Mouting, updation, unmouting.',
        isPre: false
      },
      {
        data: 'Mouting: là quá trình sẽ thực thi khi component chạy lần đầu tiên. Có các pt vòng đợi như componentWillMount, render, componentDidMount. Các phương thức này sẽ lần lượt được gọi',
        isPre: false
      },
      {
        data: 'Update: là quá trình sẽ thực thi khi props hoặc state thay đổi.',
        isPre: false
      },
      {
        data: 'Có các pt vòng đợi như componentWillReceiveProps, shouldComponentUpdate, componentDidUpdate.',
        isPre: false
      },
      {
        data: 'componentWillReceiveProps: sẽ thực thi khi comp con nhận được props từ component cha',
        isPre: false
      },
      {
        data: 'shouldComponentUpdate: thực thi trước rerender, sd để ngăn chặn việc rerender của component',
        isPre: false
      },
      {
        data: 'componentDidUpdate: thực thi khi component đã rerender',
        isPre: false
      },
      {
        data: 'Unmounting: là quá trình sẽ thực thi trước khi component bị xóa khỏi DOM. Có pt vòng đời là componentWillUnmount',
        isPre: false
      },
      {
        data: 'Functional component: Sử dụng useEffect hook để quản lí vòng đời',
        isPre: false
      },
      {
        data: 'useEffect hook nhận vào 2 tham số: Tham số đầu tiên là 1 callback funtion, tham số thứ 2 là 1 array depedency',
        isPre: false
      },
      {
        data: 'useEffect hook sẽ dựa vào array defedency này để đạt được các kết quả tương tự các pt vòng đời của class component',
        isPre: false
      },
      {
        data: 'Không truyền array depedency: ue sẽ thực thi sau mỗi lần render và rerender',
        isPre: false
      },
      {
        data: 'Truyền 1 mảng rỗng: ue sẽ thực thi một lần duy nhất khi component được render. Giống componentDidMount',
        isPre: false
      },
      {
        data: 'Truyền vào prop: sẽ so sánh props, state với props state cũ. nếu khác nhau sẽ thực thi callback ở tham số 1. Không thay đổi thì không có gì xảy ra. Giống shouldComponentUpdate, componentWillReceiveProps, componentDidUpdate',
        isPre: false
      },
      {
        data: 'SD return trong ue để đạt được kết quả tương tự componentWillUnmount()',
        isPre: false
      }
    ]
  },
  {
    question: 'Các hooks trong funtional component, ưu điểm của react hooks?',
    answer: [
      {
        data: 'Ưu điểm: Mang lại sự thuận tiện của component dựa vào class sang component dựa vào function(hooks). Xóa bỏ keyword this và các phương thức vòng đời',
        isPre: false
      },
      {
        data: 'useState: sd để tạo ra 1 state và hàm cập nhật lại giá trị của state. us nhận vào 1 giá trị khỏi tạo của state. Trả về 1 mảng gồm 2 phần tử. pt đầu tiên là 1 state, pt 2 là 1 hàm cập nhật lại giá trị state',
        isPre: false
      },
      { data: 'useEffect', isPre: false },
      {
        data: 'useReducer: sd để quản lý state của 1 component có 1 số lượng lớn state hoặc logic cập nhật state phức tạp',
        isPre: false
      },
      {
        data: 'useReducer nhận vào 2 tham số. ts đầu tiên là 1 reducer, tham số thứ 2 là giá trị khởi tạo của state. Trả về 1 mảng gồm 2 pt. pt đầu tiên là state, pt thứ 2 là 1 dispatch',
        isPre: false
      },
      {
        data: 'useMemo: sd để ngăn chặn việc tính toán lại một kq nào đó khi component rerender',
        isPre: false
      },
      {
        data: 'useCallback: sd để ngăn chặn tạo lại 1 hàm khi component rerender',
        isPre: false
      },
      {
        data: 'useRef: trả về 1 thuộc tính current thông qua tham số khởi tạo. Sd để thao tác với các phần tử của DOM',
        isPre: false
      },
      {
        data: 'useContext: sd để chia sẽ state giữa các component',
        isPre: false
      },
      {
        data: 'useSelector: sd để lấy state trong store bằng cách sd 1 selector funtion',
        isPre: false
      },
      {
        data: 'useDispatch: tham chiếu đến function dispatch trong store. sd để truyền đi một action nào đó',
        isPre: false
      }
    ]
  },
  {
    question:
      'Redux là gì? Khi nào sd redux? Vì sao phải sd redux? So sánh redux vói context api? Khi nào sd redux, context',
    answer: [
      {
        data: 'Redux: Là 1 công cụ giúp quản lí state và chia sẽ state giữa các component.',
        isPre: false
      },
      {
        data: 'Vì sao phải sử dụng redux: SD redux để giải quyết được vấn đề props drilling. Các component ở khắp mọi nơi trong ứng dụng có thể truy cập và thay đổi giá trị của state',
        isPre: false
      },
      {
        data: 'Khi nào sd: Khi ứng dụng có 1 số lượng lớn state và giá trị các state này thay đổi liên tục. Logic cập nhật lại giá trí state phức tạp',
        isPre: false
      },
      {
        data: 'Các thành phần chính của redux: Action: là các event được tạo ra bằng cách sử dụng funtion và gửi dữ liệu từ ứng dụng lên store',
        isPre: false
      },
      {
        data: 'Reducer: là các function sd để lấy state ở store và dữ liệu của action vừa được dispatch để trả về 1 dữ liệu mới của state',
        isPre: false
      },
      {
        data: 'Store: là nơi lưu tất cả state và cung cấp các funtion để thao tác với state, dispatch action',
        isPre: false
      },
      {
        data: 'Midlewave sử dụng để viết các logic bất đồng bộ trong redux',
        isPre: false
      },
      {
        data: 'Redux vói context api: để giải quyết vấn đề props drilling thì chúng ta có thể sử dụng redux or context api nhưng',
        isPre: false
      },
      {
        data: 'Redux là 1 state management, có nghĩa là chúng ta có thể theo dõi state theo thời gian. có thể biết được state đã thay đổi như thế nào',
        isPre: false
      },
      {
        data: 'Context api chỉ đơn giản là việc chia sẽ state giữa các component',
        isPre: false
      },
      {
        data: 'Redux cung cấp nhiều bô công cụ giúp trong việc debug như redux devtool, time travel debugging',
        isPre: false
      },
      {
        data: 'Các state trong redux sẽ được gom về 1 store và store dó là duy nhất. điều này thật sự cần thiết với ứng dụng khi mở rông, dễ quản lí state',
        isPre: false
      },
      {
        data: 'Với Context api thi các state này nằm ở khắp mọi nơi. khó quản lí khi mở rộng ưd',
        isPre: false
      },
      {
        data: 'Sd context khi ứng dụng có quy mô nhỏ, không có quá nhiều state và chỉ muốn chia sẽ state giữa các component.',
        isPre: false
      },
      {
        data: 'SD redux khi ứng dụng có quy mô lớn, có 1 số lượng lớn state, ưd phải xử lí nhiều logic cập nhật state khó cần sd đến midlewave, redux devtool',
        isPre: false
      }
    ]
  },
  {
    question: 'Redux toolkit là gì? Vì sao phải sử dụng react toolkit?',
    answer: [
      {
        data: 'Redux toolkit là 1 thư viện giúp viết redux đơn giản và tốt hơn. Giúp việc cấu hình redux trở nên dễ dàng hơn. Đỡ phải cài các công cụ giúp redux chạy hiệu quả hơn như redux devtool, time travel debugging',
        isPre: false
      }
    ]
  },
  {
    question: 'SASS/SCSS là gì?',
    answer: [
      {
        data: 'SASS/SCSS là 1 chương trình tiền xử lí css. Giúp viết css như 1 ngôn ngữ lập trình có cấu trúc rõ ràng rành mạch',
        isPre: false
      },
      {
        data: 'Có mixin tạo hàm, include để xử dụng hàm, import, loop, condition',
        isPre: false
      }
    ]
  },
  {
    question: 'BEM là gì?',
    answer: [
      { data: 'BEM là 1 chuẩn quy ước đặt tên class trong css.', isPre: false },
      {
        data: 'Block các thành phần chính của trang như header, footer',
        isPre: false
      },
      {
        data: 'Element các thành phần chính của block. được quy ước bằng 2 dấu gạch dưới',
        isPre: false
      },
      {
        data: 'Modifier: cách thay đổi hiển thị của block or element. được quy ước bằng 2 dấu gạch giữa',
        isPre: false
      }
    ]
  },
  {
    question: 'Server side rendering, Static side generation, CSR',
    answer: [
      {
        data: `Statics side generation(getStaticProps version < 13): HTML sẽ được generate tại thời gian build và các trang HTML tĩnh này sẽ được lưu trữ sẵn trên máy chủ. Khi người dùng yêu cầu, máy chủ chỉ cần gửi trang HTML tĩnh mà không phải thực hiện thêm bất kỳ logic xử lý nào.
Đặc điểm:
  Các trang html được render một lần tại thời điểm build và không thay đổi cho tới lần build tiếp theo.
  Tốc độ tải trang rất nhanh vì không cần xử lý ở phía server trong quá trình yêu cầu.
  Ít tốn tài nguyên máy chủ vì các trang đã được xây dựng trước.
  Sẽ hạn chế trong việc hiển thị dữ liệu động vì trang đã tĩnh sẵn từ lúc build.
Trường hợp sử dụng: 
Các trang có nội dung ít thay đổi hoặc không thay đổi theo người dùng(vd blog, tài liệu, danh mục sản phẩm)
Tối ưu cho SEO vì các trang được kết xuất sẵn và có đầy đủ nội dung ngay từ lúc gửi tới trình duyệt.

ISR cho phép bạn kết hợp tính năng của SSG và SSR bằng cách tái tạo một số trang tĩnh sau khi chúng đã được triển khai mà không cần rebuild lại toàn bộ ứng dụng. Điều này giúp trang có thể hiển thị dữ liệu mới mà không phải mất thời gian để build toàn bộ website khi có thay đổi nhỏ.
Là quá trình revalidate data, nextjs sẽ build lại data

const response = await fetch(http://localhost:3000/blogs?_page=${1}&_per_page=${10}', {
    method: 'GET',
    cache: 'force-cache' // sẽ là SSG hoặc không khai báo cache thì mặc định là force-cache
})
`,
        isPre: true
      },
      {
        data: `SSR là render trang web trên máy chủ mỗi khi có yêu cầu từ client. Máy chủ sẽ thực hiện các logic tính toán cần thiết như là lấy dữ liệu từ API hoặc db, sau đó trả về một trang HTML cho trình duyệt.
Đặc điểm:
  Mỗi lần người dùng yêu cầu một trang, máy chủ sẽ chạy lại quá trình render.
  SSR giúp cải thiện SEO vì trang được gửi tới người dùng đã có nội dung đầy đủ, không cần JavaScript chạy phía client mới hiển thị nội dung.
  Thời gian tải trang ban đầu có thể chậm hơn so với SSG vì phải chờ máy chủ kết xuất nội dung mỗi lần.
Trường hợp sử dụng:
  Dữ liệu thay đổi thường xuyên và cần được tải mới mỗi khi người dùng truy cập.
  Trang web yêu cầu dữ liệu động từ các nguồn khác nhau hoặc cần hiển thị thông tin tuỳ biến theo người dùng (ví dụ: thông tin đăng nhập, giỏ hàng).
const response = await fetch('http://localhost:3000/blogs?_page=${1}&_per_page=${10}', {
    method: 'GET',
    cache: 'no-store' // sẽ là ssr
})
  `,
        isPre: true
      },
      {
        data: `
Khi nào nên chọn SSR hoặc SSG?
SSR: Khi bạn cần hiển thị dữ liệu động theo thời gian thực hoặc cá nhân hóa trải nghiệm người dùng (ví dụ: ứng dụng thương mại điện tử, mạng xã hội).
SSG: Khi trang web của bạn có nội dung ít thay đổi hoặc chỉ cập nhật theo một tần suất nhất định (ví dụ: trang tài liệu, blog).
const response = await fetch('http://localhost:3000/blogs?_page=${1}&_per_page=${10}', {
    method: 'GET',
    next: {
      revalidate: 60,  
    }
})
`,
        isPre: true
      },
      {
        data: 'Client side rendering: Client sẽ làm nhiệm vụ render, client sẽ load các tài nguyên như JS, CSS, Image sau đó mới render ',
        isPre: false
      },
      {
        data: 'static generation + fetch data ở client side: Tạo những file raw sẵn còn phần dữ liệu (không cần fetch ở phía server) mà đợi những file raw load xong thì mới fetch dữ liệu động(dữ liệu không cần phải render sẵn bên phía server, k cần seo, private website)',
        isPre: false
      }
    ]
  },
  {
    question: 'Clientside caching',
    answer: [
      { data: 'Có nhiều dạng client-side caching khác nhau nhưng phổ biến là Browser caching.', isPre: false },
      {
        data: 'Browser caching: Trình duyệt sẽ cache các nội dung tĩnh dựa trên HTTP headers, những truy cập sau này dữ liệu sẽ được lấy từ cache (local) thay vì tải lại từ server, một số HTTP response headers dùng để kiểm soát cache như.',
        isPre: false
      },
      {
        data: `Cache-Control, Expires, và ETag để quy định thời gian lưu trữ và cách cache được thực hiện trên client. Những headers này sẽ xác định:
Bao lâu dữ liệu có thể được cache trước khi cần yêu cầu mới.
Liệu dữ liệu đã cache có thể được sử dụng mà không cần xác thực lại với server.
Khi nào dữ liệu cần được làm mới hoặc kiểm tra lại với server.`,
        isPre: true
      },
      {
        data: `Cache-Control: max-age=3600 cho phép client cache dữ liệu trong 1 giờ.
Cache-Control: no-cache: yêu cầu server cung cấp dữ liệu mới hoặc Cache-Control: no-store yêu cầu client không cache dữ liệu hoặc luôn kiểm tra lại với server.

ETag là một cơ chế giúp xác định phiên bản của tài nguyên. Server tạo ra một ETag cho mỗi tài nguyên và gửi nó trong response.
Khi client yêu cầu tài nguyên lần đầu, nó sẽ nhận được cả nội dung tài nguyên và ETag. Lần sau, khi client yêu cầu lại tài nguyên này, nó sẽ gửi ETag cũ trong header If-None-Match để hỏi server xem tài nguyên đó có thay đổi không.

Nếu tài nguyên không thay đổi:
Server sẽ trả về HTTP 304 Not Modified mà không gửi lại toàn bộ nội dung tài nguyên.
Điều này giúp giảm băng thông và tăng tốc độ tải.

Nếu tài nguyên đã thay đổi:
Server sẽ gửi lại tài nguyên mới cùng với ETag mới.

Client có thể gửi ETag trong yêu cầu sau với header If-None-Match để hỏi server về tính hợp lệ của tài nguyên. Không thể thay đổi giá trị của Etag

Expires là một header HTTP xác định thời gian hết hạn cụ thể (dưới dạng ngày tháng) của tài nguyên được cache.
Nếu thời gian trên client vẫn còn trước thời điểm trong header Expires, client có thể sử dụng dữ liệu từ cache mà không cần hỏi server.
Khi thời gian vượt qua giá trị Expires, client sẽ yêu cầu dữ liệu mới từ server.

Chưa hết hạn nếu yêu cầu lại tài nguyên, trình duyệt sẽ kiểm tra cache và sử dụng dữ liệu nếu còn hợp lệ.
`,
        isPre: false
      }
    ]
  },
  {
    question: 'CI/CD',
    answer: [
      {
        data: 'CI là một phương pháp phát triển phần mềm tối ưu, mỗi khi có một thay đổi đối với code, sẽ có một server tự động build, chạy test để kiểm tra và đảm bảo không có lỗi nào xuất hiện trong quá trình phát triển.',
        isPre: false
      },
      {
        data: 'CD là một quá trình phát hành sản phẩm hoặc phần mềm, các thay đổi về code sẽ tự động được deploy tự động lên các server staging, production, cùng với việc chạy các bài test để đảm bạo độ chính xác.',
        isPre: false
      },
      {
        data: `Quá trình chạy 1 job trên CircleCI như sau:
Khi code được merge vào một branch thì sẽ CircleCI sẽ tự động bắt được sự kiện này và chạy job tương ứng đã được config.
CircleCI tạo một môi trường trên server của nó, pull docker images và run các steps để build code dựa theo các config của chúng ta.
Sau khi chạy xong hết các step thì công việc của nó đã xong, có thể xem trạng thái thành công hay thất bại ở màn Dashboard.`,
        isPre: false
      },
      {
        data: 'Modifier: cách thay đổi hiển thị của block or element. được quy ước bằng 2 dấu gạch giữa',
        isPre: false
      }
    ]
  },
  {
    question: 'Reponsive web design and mobile first',
    answer: [
      {
        data: 'Responsive là kỹ thuật giúp website hiển thị tương thích với nhiều kích thước màn hình khác nhau',
        isPre: false
      },
      {
        data: `Nguyên tắc: 
  - Bố cục linh hoạt: bao gồm cách thức xây dựng bố cục đơn giản nhưng linh hoạt, có thể resize chiều dài, nên sử dụng phần trăm, và đơn vị em (để tạo ra khoảng cách giữa các thành phần). TRÁNH sử dụng các đơn vị truyền thống như pixel hay inch
        Flexbox và CSS Grid là những công cụ hữu ích để tạo các layout linh hoạt. Chúng giúp phân phối không gian và căn chỉnh nội dung trên các kích thước màn hình khác nhau.
  - Sử Dụng Media Queries: áp dụng các kiểu CSS khác nhau tùy theo kích thước màn hình, độ phân giải, hoặc các đặc tính khác của thiết bị.
  - Tối ưu trải nghiệm người dùng: hiển thì rõ ràng các thành phần(hình ảnh, cỡ chữ, nút bấm), ẩn hiện các thành phần phù hợp theo kích thước màn hình
  - Thiết Kế Dựa Trên Mobile-First: tiêu chuẩn ưu tiên mặc định cho các thiết bị di động sau đó mới override các giá trị cho tablet, và sau cùng là desktop.
  - Kích Thước Hình Ảnh và Video Linh Hoạt: set CSS như max-width: 100% để hình ảnh và video có thể co dãn theo kích thước của khung chứa.
  `,
        isPre: true
      },
      {
        data: `Kỹ thuật tối ưu hoá: 
  - Tối ưu hoá hình ảnh: 
  - Cải thiện thời gian tải trang:
    - Sử dụng cdn để phân phối tài nguyên 
    - Caching dữ liệu
  - Tối ưu hoá quá trình render: 
    - Sử dụng lazy load
    - Tối ưu hoá import: dùng gì thì chỉ import cái đó giúp giảm size của dự án giúp load nhanh hơn, xoá các dependencie không sử dụng, xoá các code không sử dụng
  - Sử Dụng Công Cụ Phân Tích: Công cụ như Google PageSpeed Insights hoặc Lighthouse giúp phân tích hiệu suất và đưa ra các gợi ý tối ưu hóa.
    `,
        isPre: true
      },
      {
        data: `Sử dụng media query:
      keyword: not, or, and, only: ngoại trừ, hoặc và, chỉ
      mediatype: print(máy in), screen: các loại màn hình, all: tất cả
      and(media features), or(media features), not(media features)
      media features có min-width, max-width với nhiều thuộc tính khác nhưng chủ yếu sd 2 feature đó
      max-width: 1024px: màn hình <= 1024 sẽ apply
      min-width: 320px: màn hình >= 320 sẽ apply
      vd: @media only screen and (max-width: 240px) {
      }
      @media screen and (min-width: 240px) {
      }
        `,
        isPre: false
      },
      {
        data: `Mobile First trong Responsive: Để làm việc với mô hình này chúng ta sử dụng tham số min-width trong media query.
/*Smart phone nhỏ*/
@media screen and (min-width: 240px){
    
}
/*Iphone(480 x 640)*/
@media screen and (min-width: 320px){
    
}
/*Tablet nhỏ(480 x 640)*/
@media screen and (min-width: 480px){
    
}
/*Ipad dọc(768 x 1024)*/
@media screen and (min-width: 768px){
    
}
/*Ipad ngang(1024 x 768)*/
@media screen and (min-width: 1024px){
  
}
`,
        isPre: true
      }
    ]
  },
  {
    question: 'ưu nhược điểm của typescript',
    answer: [
      {
        data: `
Chức năng từng sài:
  Khai báo kiểu dữ liệu cho biến, state, tham số truyền vào hàm giá trị trả về của hàm
  Union Types(một biến, tham số truyền vào có thể có nhiều kiểu dữ liệu) const a: number | undefined = undefined;
  Interface hoặc type giúp mô tả rõ ràng các thuộc tính và phương thức mà đối tượng cần có.
  interface có thể kế thừa từ 1 interface khác
  interface A { name: string | number, func: (arr: number) => number;}
  Enums,
  Generic function:
  const getTuple: <T, U>( a: T, b: U ) => [ T, U ] = ( a, b ) => {
    return [ a, b ];
  }
  interface P { name: string }
  const arr: P[] = [];
  arr.push( { name: 'John' } ); // ok

  let stringArray = getTuple<number, string>( 1, 'world' );

  Generic Interface
  interface ApiResponse<DataType> {
    data: DataType,
    status: number,
    message: string,
  }

  const data: ApiResponse<{ name: string }> = { data: { name: 'John' } };

  Ưu điểm: giúp phát hiện lỗi liên quan đến kiểu ngay khi lập trình, thay vì đợi đến khi chạy ứng dụng.
  Tích hợp tốt với các IDE như VS Code, cung cấp các tính năng như tự động hoàn thành code, gợi ý kiểu dữ liệu đối với object
        `,
        isPre: true
      }
    ]
  },
  {
    question: 'Giới thiệu bản thân',
    answer: [
      {
        data: 'Em chào các anh chị. Lời đầu tiên em xin cảm ơn các anh chị cùng Quý công ty đã tổ chức buổi phỏng vấn này, để hôm nay em có thể thể hiện được năng lực của bản thân cũng như nguyện vọng ứng tuyển vào vị trí Frondend developer.',
        isPre: false
      },
      {
        data: 'Như em đã viết ở trong CV. sau đâu e xin giới thiệu ngắn gọn về bản thân mình như sau:',
        isPre: false
      },
      {
        data: 'E tên là ĐTS, 28 tuổi, tốt nghiệp trường đhgtvt tphcm chuyên nghành cntt.',
        isPre: false
      },
      {
        data: 'Cho đến nay e đã có hơn 1 năm kinh nghiệm ở vị trí frontend developer tại cty TMA solution và hơn 3 năm kinh nghiệm làm freelance.',
        isPre: false
      },
      {
        data: 'Em có kinh nghiệm trong việc phát triển giao diện người dùng, đặc biệt là sử dụng các công nghệ như HTML, CSS, JavaScript và React, Angular, NextJS. Bên cạnh đó, em cũng có kinh nghiệm sử dụng Git để quản lý mã nguồn và Jira để quản lý dự án, theo dõi tiến độ công việc và đảm bảo dự án được hoàn thành đúng thời hạn.',
        isPre: false
      },
      {
        data: 'Trong quá trình làm việc tại TMA Solutions, em đã có cơ hội làm việc với các thành viên trong team, hợp tác chặt chẽ với backend developers, UI/UX designers, và testers để hoàn thành dự án theo yêu cầu khách hàng.'
      },
      {
        data: 'Em đã từng làm qua môi trường làm việc nhóm ở công ty cũng như là làm freelancer nên e có là khả năng xử lý công việc độc lập mà không cần có quá nhiều sự hướng dẫn từ đồng nghiệp, cũng cũng như khả năng làm việc nhóm cần giao tiếp nhiều với đồng nghiệp, với khách hàng.',
        isPre: false
      },
      {
        data: 'Em luôn sẵn sàng học hỏi các công nghệ mới và cập nhật xu hướng trong lĩnh vực phát triển phần mềm. Em tin rằng việc học hỏi không ngừng là chìa khóa để cải thiện bản thân và đóng góp tốt hơn cho công ty.',
        isPre: false
      },
      {
        data: 'Về điểm yếu em nhận thấy mình còn chưa tự tin khi thuyết trình trước đám đông nhưng e vẫn đang thường xuyên thực hành để cải thiện khả năng này. Em tin rằng mình đang tiến bộ và sẽ sớm khắc phục được điểm yếu này.',
        isPre: false
      },
      {
        data: 'Với niềm đam mê trong việc phát triển các sản phẩm chất lượng cao, em mong muốn có cơ hội được làm việc và phát triển lâu dài tại Quý công ty, nơi em có thể tiếp tục phát huy những kinh nghiệm đã có và học hỏi thêm nhiều kỹ năng mới. Em xin cảm ơn ạ.',
        isPre: false
      },
      {
        data: `Câu hỏi.
  Trong job description thì e không thấy nhắc đến chính sách tăng lương, Công ty có chính sách tăng lương và thưởng hay phụ cấp cho nhân viên không ạ?
  Vậy tiêu chí đánh giá, thời gian và phương thức tăng lương như nào ạ
  Về việc OT thì bên công ty có để nhân viên OT và nếu có thì có lương OT không ạ, e thì không ngại việc OT
        `,
        isPre: false
      }
    ]
  },
  {
    question: 'React query là gì?',
    answer: [
      {
        data: 'React query là 1 thư viện giúp viết react tốt hơn. nó xử lí phần dữ liệu cần lưu vào bộ nhớ đệm, trạng thái loading và call lại api',
        isPre: false
      },
      {
        data: 'Caching giúp cho app chạy nhanh và mượt mà hơn. Ví dụ bạn gọi API /posts để lấy tất cả bài posts khi bắt đầu load trang lên, sau đó click vào để xem chi tiết từng bài post (detail page). Khi bạn nhấn nút Back để trở lại trang posts thì mặc định bạn sẽ thấy data đã có sẵn từ cache và người dùng sẽ thấy data ngay lập tức (không cần chờ gọi API như sử dụng axios hay fetch API)',
        isPre: false
      },
      { data: 'Các lợi ích chính mà React-Query mang lại:', isPre: false },
      {
        data: 'Window focus refetching: khi người dùng rời khỏi tab ứng dụng của bạn, React Query sẽ đánh dấu dữ liệu là cũ và tìm hiểu lại dữ liệu đó khi người đó quay lại.',
        isPre: false
      },
      {
        data: 'Request retry: bạn có thể đặt số lần thử call lại api khi bị lỗi',
        isPre: false
      },
      {
        data: 'Prefetching: có thể tìm nạp trước truy vấn. React Query sẽ cập nhật nó trong nền.',
        isPre: false
      },
      {
        data: 'react query bao gồm useQuery, useMutate hook, useQuery nhận vào 3 tham số, queryKey , queryFn và các option như retry, staleTime, cacheTime...',
        isPre: false
      },
      {
        data: 'queryKey: là 1 key định danh cho query, react query sẽ quản lí việc caching dựa trên query key này. queryKey: là một mảng với nhiều key có thể là string, object, number. Khi thành phần trong key thay đổi thì sẽ tự động trigger queryFn ',
        isPre: false
      },
      {
        data: 'queryFn: là 1 hàm bất kỳ trả về 1 promise, có thể là resolve hoặc reject',
        isPre: false
      },
      { data: 'Các option: ', isPre: false },
      {
        data: 'staleTime: là thời gian mà data được cho là đã cũ. Sau khi fetch data thì sau 1 thời gian thì mà chúng ta quy định thì data sẽ tự cũ. Mặc định là 0 miliseconds',
        isPre: false
      },
      {
        data: 'cacheTime: là thời gian mà data sẽ bị xoá ra khỏi bộ nhớ đệm. Data có thể là đã cũ nhưng vẫn chưa bị xoá khỏi bộ nhớ đệm vì staleTime nhỏ hơn cacheTime, và thường thì staleTime sẽ được set nhỏ hơn cacheTime',
        isPre: false
      },
      { data: 'retry: thử fetch lại với số lần', isPre: false },
      {
        data: 'useQuery trả về một object bao gồm data, isLoading, isError, isSuccess, error, status(cho thông tin data có hay không), fetchStatus(cho thông tin queryFn có đang chạy hay không)',
        isPre: false
      },
      { data: 'Cơ chế caching: ', isPre: false },
      {
        data: 'Trường hợp data đã bị xoá khỏi cache(quá thời gian của cacheTime): thì khi gọi lại query thì cũng sẽ fetch lại api kể cả dữ liệu chưa bị cũ',
        isPre: false
      },
      { data: 'Trường hợp data chưa bị xoá khỏi cache', isPre: false },
      {
        data: 'Khi chưa cũ(chưa quá thời gian staleTime) thì react query sẽ trả về data cached',
        isPre: false
      },
      {
        data: 'Khi dữ liệu đã cũ(quá thời gian staleTime) thì react query sẽ trả về data cached và đồng thời fetch api ngầm. sau khi fetch xong nó sẽ update lại data cached để trả về data mới',
        isPre: false
      },
      { data: 'Vòng đời của caching:', isPre: false },
      { data: 'Query Instance có hay không cache data', isPre: false },
      {
        data: `Query Instance: useQuery({
  queryKey: ['users', page],
  queryFn: () => getAllUser(page),
  retry: 2,
  staleTime: 1000 * 60 * 1, // 1 minutes
  cacheTime: 1000 * 60 * 5, // 5 minutes
}) `,
        isPre: true
      },
      { data: 'Fetch ngầm(background fetching)', isPre: false },
      {
        data: 'Các inactive query. Khi một key inactive thì caching time sẽ bắt đầu đếm thời gian',
        isPre: false
      },
      { data: 'Xoá cache ra khỏi bộ nhớ(garbage collection)', isPre: false },
      {
        data: 'Sử dụng useMutation để cập nhật lại giá trị của data',
        isPre: false
      },
      {
        data: `const { mutate: mutateCreate, isLoadingCreate } = useMutation({
  mutationFn: (data) => createUser(data)
});

const { mutate: mutateUpdate } = useMutation({
  mutationFn: ({ id, name }) => updateUser(id, { name })
})`,
        isPre: true
      },
      {
        data: `<button onClick={() => {
  mutateCreate({ name: inputRef.current.value }, {
    onError: (error) => {
      console.log(error, 'error');
    },
    onSuccess: (data) => {
      console.log(data, 'success');
      queryClient.invalidateQueries(['users', page]); // thông báo dữ liệu cho stealed
    }
  });
  // action after call api
  // mutate nhận một promise và là 1 bđb nhưng không return promise nên nếu có hành động chờ call api trả về kq thì phải viết trong onSuccess or onError
}}>Create user</button>`,
        isPre: true
      }
    ]
  },
  {
    question: 'HOC là gì?',
    answer: [
      {
        data: 'HOC là 1 kỹ thuật nâng cao trong react. sd để tái sử dụng 1 component. HOC nhận vào 1 component và trả về 1 component',
        isPre: false
      }
    ]
  },
  {
    question: 'Các cách tiếp cận style trong react?',
    answer: [
      {
        data: 'inline style, styled component, css module, sass/scss',
        isPre: false
      }
    ]
  },
  {
    question: 'Keys trong react là gì?',
    answer: [
      {
        data: 'Keys là 1 mã định danh độc nhất. SD để xác định các thành phần nào đã thay đổi hoặc đã bị xóa khỏi danh sách. Xác định được nến render thành phần nào mà không cần phải lần nào cũng render lại cả 1 danh sách',
        isPre: false
      }
    ]
  },
  {
    question: 'React router là gì?',
    answer: [
      {
        data: 'React router là 1 thư viện định tuyến trong react. Giúp tạo nhiều chế độ hiển thị trong ứng dụng',
        isPre: false
      },
      {
        data: 'Khi người dùng nhập vào 1 đường dẫn cụ thể. và đường dẫn đó trùng khớp với bất kì route nào ở trong router thì người dùng sẽ được chuyển đến route đó',
        isPre: false
      }
    ]
  },
  {
    question: 'Styled component là gì? ',
    answer: [
      {
        data: 'Styled component là 1 thư viện giúp tổ chức và quản lí css trong react. Xd với mục đích là giữ cho style của component luôn gắn liền với component đó',
        isPre: false
      }
    ]
  },
  {
    question: 'JS là gì? Các kiểu dữ liệu trong JS? Null khác undefined như thế nào?',
    answer: [
      {
        data: 'JS là 1 ngôn ngữ lập trình dùng để tạo các trang web tương tác. JS được nhúng vào html để trang web trở nên sinh động hơn.',
        isPre: false
      },
      {
        data: 'Các kiểu dữ liệu trong JS: Number, string, object, array, null, undefined, boolean',
        isPre: false
      },
      {
        data: 'Undefined có nghĩa là giá trị không xác định. khi môt biến được tạo ra nhưng chưa gán giá trị thì biến đó có giá trị là undefined. kiểu dữ liệu của undefined là undefined',
        isPre: false
      },
      {
        data: 'Null có nghĩa là giá trị rỗng hoặc là giá trị chưa tồn tại. Kiểu dữ liệu của null là object',
        isPre: false
      }
    ]
  },
  {
    question: 'So sánh var, let, constant',
    answer: [
      {
        data: 'Một biến được khai báo bằng var or let thì biến đó có thể thay đổi giá trị, constant thì không thay đổi được giá trị',
        isPre: false
      },
      {
        data: 'var có tính chất hoisting, let và const không có tính chất hoisting. VD:',
        isPre: false
      },
      {
        data: `console.log(a); // Không bị lỗi kết quả là undefined
var a = 1;

console.log(a); // bị lỗi
let a = 1;
`,
        isPre: true
      },
      {
        data: 'trong cùng một scope thì var có thể khai báo lại, let và const thì không thể khai báo lại(nhưng ngoài phạm vị thì được, vd dưới)',
        isPre: false
      },
      {
        data: `var greeting = 'hi';
if (true) {
  var greeting = 'hello';
}
console.log(greeting) // hello: bị cập nhật lại
`,
        isPre: true
      },
      {
        data: `let greeting = 'hi';
if (true) {
  let greeting = 'hello'; // khai báo lại khác scope và biến này chỉ có phạm vị trong block
  console.log(greeting) // hello
  let greeting = 'hello1'; // khai báo lại trong cùng 1 scope lỗi ngay
}
console.log(greeting) // hi`,
        isPre: true
      }
    ]
  },
  {
    question: 'Scope trong JS',
    answer: [
      {
        data: 'Global scope: biến toàn cục, biến nằm ngoài tất cả các funtion',
        isPre: false
      },
      { data: 'Block scope chỉ có giá trị trong dấu ngoặc nhọn', isPre: false }
    ]
  },
  {
    question: 'Bất đồng bộ là gì? Các cách để xử lí bất đồng bộ?',
    answer: [
      {
        data: 'Là quá trình mà các câu lệnh có thể chạy cùng một lúc mà không phải chờ câu lệnh trước đó',
        isPre: false
      },
      {
        data: 'Ưu điểm: tối ưu được thời gian chạy của các câu lệnh',
        isPre: false
      },
      {
        data: 'Nhược điểm: vì các câu lệnh này chạy cùng 1 lúc và kq trả về không theo tuần tự nên sẽ khó trong việc kiểm soát và debug',
        isPre: false
      },
      {
        data: 'Các phương thức xli bất đồng bộ: callback, promise, async/await',
        isPre: false
      },
      {
        data: 'Callback: trong js thì function là 1 object vì vậy nó có thể nhận 1 hàm khác làm tham số truyền vào. Các hàm được truyền dưới dạng tham số và được sd sau đó được gọi là hàm callback. Được sd khi chạy chương trình có 1 câu lệnh bdb, và câu lệnh đó chưa trả về kq ngay thì chúng ta truyền vào 1 cb function để hứng kq khi bdb trả về kq',
        isPre: false
      },
      {
        data: 'Promise: là một lời hứa đại diện cho 1 giá trị chưa tốn tại. giá trị đó sẽ trả vè kq trong tương lai. Promise nhận 1 callback function gồm 2 tham số resolve và reject',
        isPre: false
      },
      {
        data: 'Async/await: async được đặt trước 1 hàm làm hàm đó trả về 1 promise. Await làm cho 1 câu lệnh đợi 1 promise. As/aw sẽ được thực hiện tuần tự. giúp code trở nên ngắn gọn hơn',
        isPre: false
      }
    ]
  },
  {
    question: 'Các phương thức xử lí mảng trong JS',
    answer: [
      {
        data: 'concat(): nối mảng, trả về 1 mảng mới, không làm thay đổi mảng ban đầu',
        isPre: false
      },
      {
        data: 'filter(): lọc các phần tử trong mảng theo điều kiện. Trả về 1 mảng mới gồm các phần tử thỏa điều kiện, trả về 1 mảng rỗng khi k có pt nào thỏa đk, không làm thay đổi mảng ban đầu',
        isPre: false
      },
      {
        data: 'find(): tìm phần tử đầu tiên thỏa đk, k có pt nào thỏa đk trả về undefined. không làm thay đổi mảng ban đầu',
        isPre: false
      },
      {
        data: 'indexOf(): lấy vị trị của pt trong mảng. k có thì trả về -1',
        isPre: false
      },
      {
        data: 'includes(): ktra xem ptu đó có trong mảng hay không. trả về boolean',
        isPre: false
      },
      {
        data: 'reduce(): trả về 1 kết quả cuối cùng mà chúng ta mong muốn. không làm thay đổi mảng ban đầu',
        isPre: false
      },
      {
        data: 'map(): duyệt mảng và trả về 1 mảng mới gồm các phần tử đã thay đổi theo mong muốn của chúng ta. không làm thay đổi mảng ban đầu',
        isPre: false
      },
      { data: 'forEach(): duyệt mảng và không trả về', isPre: false },
      {
        data: 'push: thêm 1 phần tử vào cuối mảng, làm thay đổi mảng ban đầu',
        isPre: false
      },
      {
        data: 'pop: lấy ra 1 phần tử cuối mảng, làm thay đổi mảng ban đầu',
        isPre: false
      },
      {
        data: 'shift: lấy ra 1 phần tử đầu mảng, làm thay đổi mảng ban đầu',
        isPre: false
      },
      {
        data: 'unshift: thêm 1 phần tử vào đầu mảng, làm thay đổi mảng ban đầu',
        isPre: false
      }
    ]
  },
  {
    question: 'Các features trong ES6,ES7,ES8',
    answer: [
      {
        data: 'default parementer: set một giá trị mặc định cho tham số truyền vào của 1 hàm. nếu hàm đó khi được gọi và không truyền vào tham số này thì hàm mặc định tham số này là gì mà chúng ta đã đặt',
        isPre: false
      },
      {
        data: 'rest parameter: khai báo 1 hàm với số lượng tham số không xác định',
        isPre: false
      },
      {
        data: 'template literals: là một trình tạo chuỗi cung cấp nhiều tính năng như tạo chuỗi nhiều dòng, nhúng 1 biến vào chuỗi. sd cặp dấu backtick',
        isPre: false
      },
      {
        data: 'object literals: giúp khai báo các đối tượng từ các biến',
        isPre: false
      },
      {
        data: 'destructuring: là một cú pháp cho phép tách biến từ thuộc tính của đối tượng hay phần tử của 1 danh sách',
        isPre: false
      },
      { data: 'arrow function, class, module: import và export', isPre: false },
      { data: 'block scope', isPre: false },
      {
        data: 'spread operation: sd Copying an array object , nối chuỗi object ',
        isPre: false
      },
      { data: 'async/await: ES7', isPre: false },
      {
        data: `Xủ lý object thành mảng: 
Object.entries(obj) => [[key, value]], 
Object.keys(obj) => [keys], 
Object.values(obj) => [value]`,
        isPre: true
      }
    ]
  },
  {
    question: 'Closure là gì?',
    answer: [
      {
        data: 'Closure là 1 hàm có khả năng nhớ nơi nó được tạo ra và có thể truy cập tới biến ở 3 phạm vi: toàn cục, biến bên trong hàm closure và biến của hàm chứa nó, dù cho hàm đó đã return',
        isPre: false
      },
      {
        data: 'Thông thường, khi một hàm đã return thì biến cục bộ trong hàm đó cũng được giải phóng.',
        isPre: false
      }
    ]
  },
  {
    question: 'Hoisting là gì?',
    answer: [
      {
        data: 'Hoisting là 1 cơ chế của js cho phép các biến, các hàm dù được tạo ở đâu thì đều được đưa lên đầu phạm vi hoạt động của chúng khi code được thực thi.',
        isPre: false
      }
    ]
  },
  {
    question: 'Tham trị(primitive type) và tham chiếu(preference types) là gì? Mutate và immutate là gì?',
    answer: [
      {
        data: 'Tham trị là gán luôn giá trị. Tham chiếu là gán địa chỉ nơi lưu giá trị',
        isPre: false
      },
      {
        data: 'immutate: là vẫn giữ nguyên giá trị lúc được khai báo và không bị thay đổi',
        isPre: false
      },
      {
        data: 'mutate: là vẫn không giữ nguyên giá trị lúc được khai báo và có thể bị thay đổi',
        isPre: false
      }
    ]
  },
  {
    question: 'This là gì?',
    answer: [
      { data: 'This là ngữ cảnh nơi this được gọi', isPre: false },
      {
        data: 'This trong ngữ cảnh toàn cụ: nó sẽ tham chiếu đến đối tượng window',
        isPre: false
      },
      {
        data: 'This trong ngữ cảnh funtion: chế độ nghiêm ngặt sẽ là undefined. k nghiêm ngặt nó sẽ tham chiếu đến đối tượng window. Khi function được sd làm hàm khởi tạo thì nó sẽ đại diện cho instance của hàm',
        isPre: false
      },
      {
        data: 'This trong ngữ cảnh object: nó sẽ đại diện cho chính object đó',
        isPre: false
      },
      {
        data: 'This trong ngữ cảnh event của js: nó sẽ đại diện cho đối tượn html được gắn sk đó',
        isPre: false
      }
    ]
  },
  {
    question: 'Anonymous function là gì?',
    answer: [
      {
        data: 'Là hàm ẩn danh được sinh ra vào thời điểm chạy của ctrinh. Thường được sử dụng như là một đối số truyền vào cho một hàm khác.',
        isPre: false
      }
    ]
  },
  {
    question: 'HOF là gì?',
    answer: [
      {
        data: 'HOF viết tắt của high order funtion. Là 1 hàm nhận vào 1 hàm khác làm tham số truyền vào hoặc trả về 1 hàm',
        isPre: false
      },
      {
        data: 'Có 3 tính chất gắn liền với HOF: Currying funtion: thay vì truyền 1 hàm có nhiều tham số truyền vào thì ta viết 1 hàm có 1 tham số truyền vào. closure và callback',
        isPre: false
      }
    ]
  },
  {
    question: 'Resful API là gì?',
    answer: [
      {
        data: 'Resful API là tập hợp các tiêu chuyển dùng trong việc thiết kế và xây dựng các api cho webservice để việc quản lí các resource trở nên dễ dàng hơn',
        isPre: false
      },
      {
        data: 'Các resource này thường được định dạng sẵn bằng json và sd các phương thức http để truyền đi',
        isPre: false
      },
      {
        data: 'Rest: là công nghệ giúp chuyển đổi cấu trúc dữ liệu. Là một dạng kiến trúc để viết nên các api. Sử dụng các method như GET, POST, PUT, DELETE',
        isPre: false
      },
      {
        data: 'API: là phương thức giúp 2 pm khác nhau có thể giao tiếp được với nhau',
        isPre: false
      },
      {
        data: 'Cách hoạt động của resful api: GET để lấy tài nguyên, POST: cập nhật tài nguyên, PUT để tạo tài nguyên, DELETE để xóa tài nguyên',
        isPre: false
      }
    ]
  },
  {
    question: 'MVC là gì?',
    answer: [
      {
        data: 'MVC là viết tắt của controller view model. Là một mô hình để thiết kế pm thường đc sd để viết các pm có giao diện người dùng',
        isPre: false
      },
      {
        data: 'Model: nhận yêu cầu từ controller, thao tác với DB để trả về kq cho controller',
        isPre: false
      },
      {
        data: 'Controller: tiếp nhận yêu cầu từ view, giao tiếp với model và trả về kq cho view',
        isPre: false
      },
      {
        data: 'View: là giao diện người dùng, tiếp nhận yêu cầu từ người dùng, thao tác với controller để trả về kq cho người dùng',
        isPre: false
      },
      {
        data: 'Ưu điểm: tách thành các thành phần độc lập nên giúp dễ phát triển và mở rộng ứng dụng',
        isPre: false
      },
      {
        data: 'Nhược: với ứng dụng nhỏ mvc gây cồng kềnh và tốn tg để trung chuyển dữ liệu giữa các thành phần',
        isPre: false
      }
    ]
  },
  {
    question: 'JSON là gì?',
    answer: [
      {
        data: 'Viết tắt của js object notation. Là một kiểu định dạng dữ liệu theo một quy ước nhất định',
        isPre: false
      },
      {
        data: 'JSON là một chuẩn dữ liệu sử dụng trong việc truyền dữ liệu trên web',
        isPre: false
      },
      { data: 'JSON sử dụng các cặp key value', isPre: false },
      {
        data: 'Kiểu dữ liệu trong JSON có thể là number, string, object, null, boolean',
        isPre: false
      }
    ]
  },
  {
    question: 'Cách mà webbrowser giao tiếp với webservice?',
    answer: [
      {
        data: 'WB và WS giao tiếp với nhau thông qua giao thức http và thông qua 4 giai đoạn',
        isPre: false
      },
      {
        data: 'Tạo kết nối: wb giao tiếp ws nhờ vào địa chỉ internet vào số cổng được đặc tả trong url',
        isPre: false
      },
      {
        data: 'Thực hiện yêu cầu: wb gửi yêu cầu tới ws, Việc gửi và nhận theo pthuc get và post ',
        isPre: false
      },
      { data: 'Phản hổi: ws gửi phản hồi cho wb', isPre: false },
      { data: 'Kết thúc kết nối', isPre: false }
    ]
  },
  {
    question: 'Cách JS hoạt động? Event loop là gì? Cách hoạt động của bất đồng bộ.',
    answer: [
      {
        data: 'JS hoạt động dựa vào engine, webapis, eventloop và calback queue',
        isPre: false
      },
      {
        data: 'JS sử dụng V8 engine: V8 engine bao gồm 2 component: memory heap: nơi sẽ xử lí các câu lệnh liên quan đến việc phân bổ vùng nhớ. Callstack nơi mà cáu lệnh thực thi sẽ được ghi ở đây, callstack thực hiện theo quy tắc LIFO',
        isPre: false
      },
      {
        data: 'webapis bao gồm các api như DOM, settimeout, ajax... Webapis được cung cấp bởi browser, nơi sẽ xử lí các câu lệnh bất đồng bộ được nhận từ callstack',
        isPre: false
      },
      {
        data: 'Eventloop: là một vòng lặp vô tận có nv quan sát callstack và callbackqueue, khi callstack rỗng nó sẽ láy callback từ callbackqueue lên callstack để thực thi.',
        isPre: false
      },
      {
        data: 'Callback quêu: là hàng đợi chứa các callback được trả về từ webapis, nó thực hiện theo cơ chế FIFO',
        isPre: false
      },
      {
        data: 'JS là 1 ngôn ngữ đơn luồng, nó chỉ có 1 callstack vì vậy nó chỉ thực thi được 1 tác vụ trong 1 lần thực thi.',
        isPre: false
      },
      {
        data: 'Khi bắt đầu 1 function, function đó sẽ được push vào callstack, khi function đó kết thúc nó sẽ đươc pop ra khỏi callstack',
        isPre: false
      },
      {
        data: 'Nhược điểm của chạy đơn luồng để thực hiện nhiều tác vụ, hoặc tác vụ nặng, tốn tg chạy thì phải chờ đợi thực thi xong tác vụ đó thì mới tới tác vụ khác. Nghĩa là browser sẽ không thể render, dẫn đến ứng dụng trở nên chậm chạp',
        isPre: false
      },
      {
        data: 'Giải pháp là sử dụng asynchronus callback. Nó là một non-blocking funtion',
        isPre: false
      },
      {
        data: 'Khi một tác vụ bất đồng bộ được push vào callstack, tác vụ đó sẽ được chuyển qua webapis để xử lí, sau khi câu lệnh bdb hoàn tất thì webapi sẽ trả về 1 callback và đẩy nó vào trong callback queue',
        isPre: false
      },
      {
        data: 'Lúc này eventloop sẽ theo dõi callstack và callbackqueue, khi callstack rỗng nó sẽ láy callback từ callbackqueue lên callstack để thực thi.',
        isPre: false
      }
    ]
  },
  {
    question: 'Regular funtion và arrow function.',
    answer: [
      {
        data: 'Arrow function sử dụng dấu => để khai báo. regular Function sử dụng keyword funtion để khai báo',
        isPre: false
      },
      {
        data: 'Khi af chỉ có 1 tham số truyền vào thì nó có thể bỏ qua được cặp dấu ngoặc đơn, khi chỉ có 1 câu lệnh return thì nó có thể bỏ qua cặp dấu nhọn và keyword return',
        isPre: false
      },
      {
        data: 'AF không tự định nghĩa this của riêng nó. Vì vậy nó không phù hợp làm method cho object',
        isPre: false
      },
      { data: 'AF không có thuộc tính prototype.', isPre: false },
      {
        data: 'AF không tự dịnh nghĩa arguments của chính nó. thay vào đó chúng ta sử dụng rest parameters',
        isPre: false
      },
      { data: 'AR không thể sử dụng làm hàm constructor', isPre: false },
      { data: 'AR không có thuộc tính hoisting', isPre: false }
    ]
  },
  {
    question: 'Angular vs react.',
    answer: [
      { data: 'Angular sd DOM, react sd DOM ảo', isPre: false },
      { data: 'Angular sd 2wb, react sd sd 1wb', isPre: false },
      {
        data: 'Angular: Các template html được tách ra thành các file riêng với logic. React thì viết chung logic với các template',
        isPre: false
      },
      {
        data: 'React import một component đơn giản hơn. Angular muốn sử dụng 1 component trong 1 component phải khai báo component đó trong module',
        isPre: false
      },
      {
        data: 'Định tuyến trong react đơn giản hơn. Chỉ cần đóng gói tất cả route bao gồm index route. và chỉ ra đường dẫn phù hợp với từng component',
        isPre: false
      },
      {
        data: 'Với angular ta phải tách route ra riêng 1 route module. Và chỉ ra đường dẫn phù hợp với từng module. Trong từng module đó là chỉ ra từng route phù hợp với từng component',
        isPre: false
      }
    ]
  },
  {
    question: 'React 18 có gì mới?',
    answer: [
      {
        data: 'Concurency: Là cơ chế render mới của react. Cho phép react có thể can thiệp vào 1 tiến trình rendering. Thay vì cập nhật render cho từng cái thì có thể chạy cùng 1 lúc, và trong quá trình cập nhật đó react có thể quyết định việc tạm dừng, tiếp tục hoặc hủy bỏ 1 trong các cập nhật',
        isPre: false
      },
      {
        data: 'Automatic batching: Nhóm các cập nhật state trong 1 lần render. Cơ chế này đã có trong version 17 nhưng chỉ được áp dụng ở trong 1 eventhandle, với vs18 thì đã có thể được áp dụng ở khắp mọi nơi',
        isPre: false
      },
      {
        data: 'Transition: có 2 kiểu cập nhật: urgent updates: những cập nhật cần được cập nhật ngay lập tức trên UI. Transition: nhưng cập nhật có thể thực hiện từ từ. Không cần thiết phải cập nhật ngay',
        isPre: false
      },
      {
        data: 'VD có 1 input tìm kiếm, khi chúng ta nhập vào một text, thì text đó cần phải cập nhật ngay(urgent updates), nhưng hiển thị kết quả tìm kiếm không cần trả ra kq ngay mà có thể chờ nhập xong mới trả kq(transition updates)',
        isPre: false
      },
      {
        data: 'Transition là cập nhật có độ ưu tiên thấp, được bọc ở trong 1 startTransion(() => {setState()}). Đây là cơ chế concurency',
        isPre: false
      },
      {
        data: 'Các hooks mới: useId() sd để tạo ra 1 id mới. VD có 1 form được tách ra thành 1 component. Trong form này có 1 input và 1 label sử dụng id để khi click vào label sẽ focus vào input. Sử dụng component form ở 1 component khác 2 lần. Nếu không sử dụng useId thì khi click vào label ở component thứ 2 sẽ bị focus vào input ở component 1 bởi vì nó bị trùng id.',
        isPre: false
      },
      {
        data: 'useTransition: trả về 1 mảng gồm 2ptu ptu 1 là biến kiểm tra xem react có đang can thiệp vào tiến trình render không, pt2 là 1 transition dùng để bọc 1 những cập nhật chưa cần phải update ngay, tránh tình trạng block UI',
        isPre: false
      }
    ]
  },
  {
    question: 'Các design pattern trong JS?',
    answer: [
      {
        data: 'Constructor pattern: là phương thức được sử dụng để khởi tạo các đối tượng mới: tạo 1 object var object = {}; khởi tạo 1 constructor bằng function: function Person() {}; const personA = new Person();',
        isPre: false
      },
      {
        data: 'Module Design Pattern: là một design pattern sinh ra để tuân thủ tính bao đóng như các ngôn ngữ lập trình OOP để tránh các truy cập, chỉnh sửa trái phép',
        isPre: false
      },
      {
        data: `function AnimalContainter () {
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
        isPre: true
      },
      {
        data: 'Singleton Pattern: là một điều cần thiết chỉ được khởi tạo một lần ví dụ như việc kết nối database.',
        isPre: false
      },
      {
        data: `function DatabaseConnection() {

  let databaseInstance = null;
    
  // tracks the number of instances created at a certain time
  let count = 0;
    
  function init() {
    // console.log(Opening database #);
    // now perform operation
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
        isPre: true
      },
      {
        data: 'Observer Pattern: cung cấp cho chúng ta một mô hình cơ bản bao gồm Subscribe, Unsubscribe và Notify.',
        isPre: false
      },
      {
        data: 'vd: Bạn có bao giờ Đăng ký nhận tin ở trang web nào chưa?. Chắc hẵn là rồi, khi bạn đăng ký nhận tin, địa chỉ email của bạn sẽ được lưu xuống hệ thống. Khi blog, tạo bài viết mới, bạn sẽ nhận được thông báo về nó. Đây là Observer. ',
        isPre: false
      },
      {
        data: `class Observable {
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
  
    usersSubscribe.notify("được thông báo bài viết mới");`,
        isPre: true
      }
    ]
  },
  {
    question: 'NextJS là gì? Tại sao nên sử dụng nextjs? Ưu nhược điểm?',
    answer: [
      {
        data: 'Next.js là một framework được phát triển trên nền của React. Chính vì dựa trên nền của React nên Next.js mang những cốt lõi tương tự như React. Next.js cung cấp cho chúng ta những ưu thế mới và vượt trội mà ở React không có được. Next.js giúp các nhà phát triển tạo ra các ứng dụng có hiệu suất tốt và web tĩnh siêu nhanh. Điều này được chứng minh khi các tên tuổi lớn đang sử dụng Next.js như: Netflix, Uber, GitHub, Twitch,',
        isPre: false
      },
      { data: 'NextJS cung cấp cho chúng ta: ', isPre: false },
      {
        data: 'Image Optimization: Tự động tối ưu hóa hình ảnh, cho phép thay đổi kích thước. Chuyển hình ảnh lớn đến các thiết bị nhỏ hơn. Tối ưu hóa hình ảnh theo yêu cầu, điều này không làm giảm tốc độ tải cảu website.',
        isPre: false
      },
      {
        data: 'Internationalization: Hỗ trợ đinh tuyến quốc tế từ bản v10.0.0 . Bạn có thể cung cấp các ngôn ngữ, ngôn ngữ mặc định và ngôn ngữ miền cụ thể. Next.js sẽ tự động xử lí việc định tuyến.',
        isPre: false
      },
      {
        data: 'Next.JS Analytics: Với việc điều cần thiết cho sự phát triển khi kiểm tra xem người dùng đang trải nghiệm ứng dụng như thế nào. Next.JS cung cấp tính năng với chế độ xem Analytics, giúp bạn có được thông tin về điểm số và dữ liệu thay đổi tổng quan.',
        isPre: false
      },
      {
        data: 'Zero Config: Tự động thực hiện biên dịch và đóng gói tự động. Tối ưu hóa cho sản phẩm ngay từ đầu.',
        isPre: false
      },
      {
        data: 'Hybrid SSG và SSR : Sử dụng cơ chế Pre-render để buil-time và request time ở (SSR) trong dự án Single.',
        isPre: false
      },
      {
        data: 'Incremental Static Regeneration: Next.js cho phép bạn tạo hoặc cập nhật các trang tĩnh sau khi xây dựng trang web của mình. Tái tạo tĩnh tăng dần cho phép bạn sử dụng tạo tĩnh trên nền mà không cần phải xây dựng lại toàn bộ trang web.',
        isPre: false
      },
      {
        data: 'TypeScript Support:  Tự động hỗ trợ cấu hình TypeScript và biên dịch',
        isPre: false
      },
      {
        data: 'Fast Refresh: Một tính năng cực kì hay và thú vị cho phép phản hồi tức thời về các chỉnh sửa được thực hiện đối với các thành phần trên dự án của bạn. Đỉnh điểm là chỉnh sửa các hiển thị nhanh trong vòng một đến hai giây mà không làm mất trạng thái hiện tại.',
        isPre: false
      },
      {
        data: 'File-system Routing:  Next.js cung cấp cho chúng ta một bộ định tuyến dựa trên hệ thống các tệp được xây dựng về trang (pages). Khi tệp được thêm vào thư mục pages, nó sẽ được tạo dựng sẳn dưới dạng một tuyến. Các tệp bên trong có thể được sử dụng hầu hết phổ biến.',
        isPre: false
      },
      {
        data: 'Built-In CSS Support: Next.js cho phép bạn nhập tệp CSS từ môt tệp Javascript. Bạn chỉ cần tạo 1 file CSS và import trực tiếp nó vào file Javascript. Và mọi thứ bắt đầu hoạt  động như cách chúng ta muốn.',
        isPre: false
      },
      {
        data: 'Code-splitting and Bundling:  Hỗ trợ thuật toán tách gói được tối ưu hóa được tạo bởi nhóm Google Chrome.',
        isPre: false
      }
    ]
  },
  {
    question: 'Cơ chế render nextjs > v13 và những thứ mới ở next > 13',
    answer: [
      {
        data: 'v13 trở đi, nextjs sử dụng server component. Khi khai báo component thì mặc định component đó là server component',
        isPre: false
      },
      {
        data: 'Server component có nghĩa là toàn bộ data sẽ được render bên phía server. ở client React chỉ có nhiệm vụ render UI dựa file html mà nextjs trả về',
        isPre: false
      },
      {
        data: 'Trong thực tế thì đối với các action của user như cuộn chuột hay click thì bắt buộc phải xử lí ở client nên nextjs cung cấp client component để giải quyết',
        isPre: false
      },
      {
        data: 'Nhưng không phải khi sử dụng tag use client thì không có nghĩa rằng cả component sẽ client render mà trước khi đưa client render nextjs sẽ có 1 khái niệm pre-render',
        isPre: false
      },
      {
        data: 'pre-render: những phần nào render được trên server nextjs sẽ render trước(fetching data, khai báo biến). lúc này client sẽ nhận 1 file raw html(không phải là 1 file httml trắng tinh như cách csr) đã chứa phần code xử lý js đã chứa dữ liệu rồi, sau đó sẽ được hidrate(vd như cái hooks, các event sẽ được tưới lên html), lúc này người dùng sẽ được 1 file html có thể tương tác',
        isPre: false
      },
      {
        data: 'Về fetch data chúng ta xử dụng async component(đã bỏ getServerSideProps), sử dụng trực tiếp bên trong component',
        isPre: false
      },
      {
        data: 'Thao tác với form phải sử dụng server action để gửi dữ liệu lên server, tạo 1 file action gắn tag use server, sau đó tạo action function nhận dữ liệu',
        isPre: false
      }
    ]
  },
  {
    question:
      'SEO: là quá trình tối ưu hóa trang web để cải thiện vị trí của nó trong kết quả tìm kiếm của các công cụ tìm kiếm như Google.',
    answer: [
      {
        data: 'Tối ưu hoá metadata, tăng trải nghiệm khi chia sẽ đường link của website qua các mạng xã hội',
        isPre: false
      },
      {
        data: 'Nguyên tắc sử dụng metadata trong nextjs: sử dụng trong layout.tsx hoặc page.tsx, sử dụng server component',
        isPre: false
      },
      {
        data: 'Thêm tiêu đề và miêu tả',
        isPre: false
      },
      {
        data: 'Tạo logo cho website',
        isPre: false
      },
      {
        data: 'Tạo url thân thiện cho việc tìm kiếm',
        isPre: false
      },
      {
        data: 'tối ưu hoá tốc độ load, website càng tối ưu => google đánh giá càng cao: Tối ưu hoá import: dùng gì thì chỉ import cái đó giúp giảm size của dự án giúp load nhanh hơn, xoá các dependencie không sử dụng, xoá các code không sử dụng',
        isPre: false
      },
      {
        data: `Tối ưu hoá keyword: đảm bảo từ khóa xuất hiện trong tiêu đề, mô tả meta
        Tối Ưu Hóa Nội Dung: Tạo nội dung chất lượng, dễ đọc, nội dung dài hơn thường có cơ hội xếp hạng cao hơn
        Tối ưu hoá hình ảnh: cung cấp alt cho hình ảnh, tối ưu hoá kích thước ảnh để cải thiện tốc độ tải, nên sử dụng định dang webp
        `,
        isPre: true
      },

      {
        data: 'File hỗ trợ cho bot crawl: robot.txt, sitemap.xml, JSON-LD, manifest.json',
        isPre: false
      },
      {
        data: 'Công cụ hỗ trợ: Google Analytics Theo dõi hiệu suất trang web và hành vi của người dùng.'
      }
    ]
  }
]

export default function App() {
  const [questions, setQuestions] = useState([...questionList])

  const showResult = (index) => {
    const answer = document.getElementsByClassName(`answer-${index}`)
    if (!answer?.length) return
    if (answer[0].classList.contains('active')) {
      answer[0].classList.remove('active')
      return
    }
    const allAnswer = document.getElementsByClassName('answer')
    if (!allAnswer?.length) return
    for (const element of allAnswer) {
      element.classList.remove('active')
    }
    answer[0].classList.add('active')
  }

  const [count, setCount] = useState(0)
  const allRef = useRef(null)

  useLayoutEffect(() => {
    console.log(allRef.current, 'layout effect')
  }, [count])

  useEffect(() => {
    console.log(allRef.current, 'useEffect')
  }, [count])

  return (
    <div className='App' ref={allRef}>
      <button onClick={() => setCount(count + 1)}>setCount</button>
      <p>{count}</p>
      {questions.map((element, index) => {
        return (
          <div key={index}>
            <h3 style={{ textAlign: 'left' }} onClick={() => showResult(index)}>
              {element.question}
            </h3>
            <div className={`answer answer-${index}`}>
              {element.answer &&
                element.answer.length &&
                element.answer.map((element1, index1) =>
                  !element1.isPre ? (
                    <p style={{ textAlign: 'left' }} key={index1}>
                      {element1.data}
                    </p>
                  ) : (
                    <pre style={{ whiteSpace: 'break-spaces' }} key={index1}>
                      {element1.data}
                    </pre>
                  )
                )}
            </div>
          </div>
        )
      })}
    </div>
  )
}
