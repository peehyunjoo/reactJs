import React, { Component } from 'react';
import List from './List';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
//import axios from 'axios';
import * as $ from 'jquery';
window.jQuery = window.$ = $


const container =[
  "content1",
  "content2",
  "content3"
]

const alt=[
  "설명1",
  "설명2",
  "설명3"
]

const arrays=[
  {
    container : "content1",
    alt : "설명1"
  },
  {
    container : "content2",
    alt : "설명2"
  },
  {
    container : "content3",
    alt : "설명3"
  }
]
class App extends Component {
 constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
    fetch('http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=430156241533f1d058c603178cc3ca0e&targetDt=20180805')
    .then(res => res.json()) // 여기서 json 객체로 변환
    .then(
        (result) => {
            //console.log(result); // 결과
            this.setState({
                isLoaded : true,
                items : result.boxOfficeResult.dailyBoxOfficeList
            });

        },
        (error) => {
            this.setState({
                isLoaded : true,
                error
            });
        }

    )

  }

  render() {

      const { items } = this.state;
      console.log(items);

      const movieList = items.map(
          item => (
            <div className="container">
              <div className="row">
                <div className="Card col-md-6 offset-md-3 card">
                  <List title={item.movieNm}/>
                </div>
              </div>
            </div>
          )
      );
      //console.log(movieList);
      return (
          <div>
              {movieList}
          </div>
      );
  }
}

/*render() {
    return (
      <div className="container">
        <div className="row">
          <div className="Card col-md-6 offset-md-3 card">
            {arrays.map((array, index) => {
              return <List title={array.container} alt={array.alt} key={index} />
            })}
        </div>
      </div>
    </div>
    );
}
}*/
export default App;
