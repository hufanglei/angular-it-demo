import { Component, OnInit,ViewChild} from '@angular/core';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.page.html',
  styleUrls: ['./slides.page.scss'],
})
export class SlidesPage implements OnInit { 


  @ViewChild('slide2') slide2;

  @ViewChild('slide1') slide1;

  slideOpts = {
    effect: 'flip',  //轮播效果
    autoplay: {
      delay: 2000,
    },
    loop:true
  };
  constructor() { }

  ngOnInit() {
  }

  //手动滑动后轮播图不自动轮播的解决方法
  slideDidChange(){

    console.log('111');
    this.slide1.startAutoplay();
  }

  slideNext(){

    this.slide2.slideNext(); /*触发方法轮播到下一页*/
  }

  slidePrev(){

    this.slide2.slidePrev(); /*触发方法轮播到上一页*/

  }

  slideUpdate(){

    this.slide2.update(); /*请求数据完成后如果轮播图工作异常  这时候调用这句话 更新轮播图*/

  }
 
}
