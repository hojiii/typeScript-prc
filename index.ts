//간단한 변수 타입지정가능
let 이름 :string = 'kim';

//배열 안에 스트링만
let 배열 :string[] = ['kim', 'lee']

//object 타입 지정
let 객체 :{name?:string} = {name:'kim'}
//?는 name속성은 옵션이다. 그래서 name이 들어가지않아도 오류안남

let 숫자또는이름 :string|number =123;

type 내타입 = string|number;

//함수 타입지정 파라미터로 number, return 값으로 number
function 함수2(x :number) : number{
  return x * 2
}

//array에 쓸 수 있는 tuple 타입
type Member = [number,boolean]
let john:Member = [123,true]


let Name :string = 'kimjiho'
let age :number = 31
let born : string = "seoul"

let song :{title: string,singer:string}={
  title:'얼음요새',singer:'김필'
}
let project :{
  member : string[],
  days: number,
  started : boolean,
} = {
  member : ['kim', 'park'],
  days: 30,
  started: true
}