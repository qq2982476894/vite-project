import Mock from 'mockjs';
const testData = Mock.mock('http://127.0.0.1:5173/api/testData', 'get', {
    status: 200,
    dataList: [1, 2, 3, 4, 5]
})
export default testData;