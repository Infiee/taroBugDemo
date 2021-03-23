import Taro from "@tarojs/taro";
import { Component } from "react";
import { View, Button, Text, Image } from "@tarojs/components";
import { observer, inject } from "mobx-react";

import "./index.scss";

class Index extends Component {
  componentDidMount() {
    console.log("模拟请求数据");
    this.mockReqData();
  }

  state = {
    list: [],
    selectIdx: 0,
  };

  mockReqData() {
    const res = {
      code: "200",
      message: "礼物列表",
      data: {
        list: [
          {
            id: "17",
            title: "比心",
            price: "1",
            cover:
              "http://oss.mkzcdn.com/image/20201229/5fead4d6677bf-600x600.gif",
            thumb:
              "http://oss.mkzcdn.com/image/20201217/5fdb197537277-680x680.png",
            intro: "比比心",
            remark: "比心",
            combo: ["1"],
          },
          {
            id: "19",
            title: "辣条",
            price: "10",
            cover:
              "http://oss.mkzcdn.com/image/20210106/5ff529c28cd94-600x600.gif",
            thumb:
              "http://oss.mkzcdn.com/image/20201229/5feaa1514b9c4-680x680.png",
            intro: "吃辣条",
            remark: "麻辣味的辣条",
            combo: ["1"],
          },
          {
            id: "20",
            title: "棒棒糖",
            price: "50",
            cover:
              "http://oss.mkzcdn.com/image/20201229/5fead5328919d-600x600.gif",
            thumb:
              "http://oss.mkzcdn.com/image/20201229/5feaa1be88d23-680x680.png",
            intro: "好吃的棒棒糖",
            remark: "奶奶买的棒棒糖",
            combo: ["1"],
          },
          {
            id: "21",
            title: "拿铁",
            price: "88",
            cover:
              "http://oss.mkzcdn.com/image/20201229/5fead5490a227-600x600.gif",
            thumb:
              "http://oss.mkzcdn.com/image/20201229/5feaa26b9a5fd-680x680.png",
            intro: "奶茶拿铁",
            remark: "黑咖啡拿铁",
            combo: ["1"],
          },
          {
            id: "22",
            title: "吃鸡",
            price: "100",
            cover:
              "http://oss.mkzcdn.com/image/20201229/5fead56450d4b-600x600.gif",
            thumb:
              "http://oss.mkzcdn.com/image/20201229/5feaa30181b79-680x680.png",
            intro: "大吉大利，吃鸡",
            remark: "吃鸡第一",
            combo: ["1"],
          },
          {
            id: "23",
            title: "火锅",
            price: "200",
            cover:
              "http://oss.mkzcdn.com/image/20201229/5fead57e6cc02-600x600.gif",
            thumb:
              "http://oss.mkzcdn.com/image/20201229/5feaa36194a9a-680x680.png",
            intro: "西红柿火锅",
            remark: "原汤火锅",
            combo: ["1"],
          },
          {
            id: "24",
            title: "游艇",
            price: "520",
            cover:
              "http://oss.mkzcdn.com/image/20201229/5fead59428132-600x600.gif",
            thumb:
              "http://oss.mkzcdn.com/image/20201229/5feaa3a07507d-680x680.png",
            intro: "泰坦尼克号游艇",
            remark: "爱的游艇",
            combo: ["1"],
          },
          {
            id: "18",
            title: "火箭",
            price: "1314",
            cover:
              "http://oss.mkzcdn.com/image/20201229/5fead4fa3d71c-600x600.gif",
            thumb:
              "http://oss.mkzcdn.com/image/20201222/5fe1b3cb499ec-680x680.png",
            intro: "火箭冲冲冲",
            remark: "火箭跑起来了",
            combo: ["1"],
          },
        ],
        count: "8",
      },
    };
    setTimeout(() => {
      this.setState({
        list: res.data.list,
      });
      console.log("模拟请求数据-end", this.state.list);
    }, 2500);
  }

  onSelect(idx) {
    console.log("选中", idx);
    this.setState({
      selectIdx: idx,
    });
  }

  render() {
    const { list,selectIdx } = this.state;

    const listItems = list.map((item, idx) => {
      return (
        <View
          className={`list-item ${
            selectIdx === idx ? "list-item--active" : null
          }`}
          key={item.id}
          onClick={() => this.onSelect(idx)}
        >
          <Image className="thumb" src={item.thumb + "!cover-200"} />
          <View className="title">{item.title}</View>
          <View className="price">{item.price}元宝</View>
        </View>
      );
    });

    return (
      <View className="index">
        <View className="test-title">测试Taro bug</View>
        <View className="gift-list">{listItems}</View>
      </View>
    );
  }
}

export default Index;
