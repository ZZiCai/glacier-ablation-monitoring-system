# 同济大学数据库课程设计

项目名称：冰川消融监测系统

作者：zcZhou



## 主页

![image-20240504174823209](https://github.com/ZZiCai/glacier-ablation-monitoring-system/blob/main/assets/image-20240504174823209.png)

在主页可以看到系统录入的所有冰川信息以及它在地图上的位置。点击地图上的冰川卡通图案，或者点击冰川信息列表中的查看详情按钮，就会跳转到数据分析板块。



地图还支持交互，可以放大查看更加详细的信息。

![image-20240504175212643](https://github.com/ZZiCai/glacier-ablation-monitoring-system/blob/main/assets/image-20240504175212643.png)



## 数据

该模块分为两个部分：

- 数据分析
- 数据管理



### 数据分析

![image-20240504175333274](https://github.com/ZZiCai/glacier-ablation-monitoring-system/blob/main/assets/image-20240504175333274.png)

数据分析模块会根据多年来冰川的面积、表面温度、盐度等特征进行深度学习分析预测，并把预测结果和真实值展示出来，根据冰川各项数据的变化趋势，系统会对冰川消融情况作判定。



冰川状态有如下四种：

- 稳定

<img src="https://github.com/ZZiCai/glacier-ablation-monitoring-system/blob/main/assets/image-20240504175540006.png" alt="image-20240504175540006" style="zoom:33%;" />

- 缓慢消融

<img src="https://github.com/ZZiCai/glacier-ablation-monitoring-system/blob/main/assets/image-20240504175605086.png" alt="image-20240504175605086" style="zoom:33%;" />

- 消融

<img src="https://github.com/ZZiCai/glacier-ablation-monitoring-system/blob/main/assets/image-20240504175622446.png" alt="image-20240504175622446" style="zoom:33%;" />

- 迅速消融

<img src="https://github.com/ZZiCai/glacier-ablation-monitoring-system/blob/main/assets/image-20240504175637281.png" alt="image-20240504175637281" style="zoom:33%;" />



不同的状态搭配的颜色也不一样，冰川状态越稳定，状态颜色越趋近于让人冷静的蓝色，而冰川的消融速度越快，状态颜色越趋于暖色，让人联想到冰川很快就会“化了”。



### 数据管理

数据管理主要分为三个部分：

- 单条数据录入
- 文件录入
- 审核数据



录入数据可以选择单条输入，如果批量输入多条数据，可以则json文件录入

![image-20240504180042860](https://github.com/ZZiCai/glacier-ablation-monitoring-system/blob/main/assets/image-20240504180042860.png)

<img src="https://github.com/ZZiCai/glacier-ablation-monitoring-system/blob/main/assets/image-20240504180212879.png" alt="image-20240504180212879" style="zoom:33%;" />



管理员会对所有该机构的上传数据进行审核，审核通过后才会进入官方数据库。可以选择单条审核，也可以对上传的数据一键审核。

![image-20240504180336990](https://github.com/ZZiCai/glacier-ablation-monitoring-system/blob/main/assets/image-20240504180336990.png)

## 个人信息

![image-20240504180435715](https://github.com/ZZiCai/glacier-ablation-monitoring-system/blob/main/assets/image-20240504180435715.png)

个人信息界面左侧显示了用户的个人信息，右侧是加入机构和审核通过功能。

输入正确的机构ID，系统会自动搜索对应机构，如果输入的机构ID找不到任何机构，点击提交会提示错误。

<img src="https://github.com/ZZiCai/glacier-ablation-monitoring-system/blob/main/assets/image-20240504180647198.png" alt="image-20240504180647198" style="zoom:33%;" />

而输入正确的机构ID，系统会自动查找到对应机构，再点击提交系统就会将申请信息发送给机构的管理员。

![image-20240504180716881](https://github.com/ZZiCai/glacier-ablation-monitoring-system/blob/main/assets/image-20240504180716881.png)

系统显示“提交成功”

<img src="https://github.com/ZZiCai/glacier-ablation-monitoring-system/blob/main/assets/image-20240504180843134.png" alt="image-20240504180843134" style="zoom:33%;" />



机构管理员可以在审核通过界面对提出申请的用户进行审核

![image-20240504180943280](https://github.com/ZZiCai/glacier-ablation-monitoring-system/blob/main/assets/image-20240504180943280.png)