window.onload = function() {



  

  var option = {
    backgroundColor: '#FFFFFF',
    title: {
      // text: '全国地图',
      // subtext: '纯属虚构',
      // x: 'center'
    },
    //提示框组件
    tooltip: {
      trigger: 'item',
      backgroundColor: 'rgb(255,255,255)',
      padding:0,
      formatter:function(params){
      	// console.log(params);
      	var v = params.data.value;
      	if(v!=undefined){
      		
      		var n = params.name;
      		var src = params.data.src;
      		console.log(params.data.src);
      		var tip = '<div class="toolBox">'
      			tip+= '<div class="toolPicBox">'
      			tip+='<img src="'+src+'" class="toolPic">';
      			tip+='</div>'
      			tip+= '<span class="toolTip">'+n+'</span></div>';
      		return tip;
      	}
      }
    },

    visualMap: {
      show: false,
      x: 'left',
      y: 'bottom',
      inRange: {
			color: ['#e81f24', '#006edd']
      },
    },

    geo: {
      map: 'china',
      roam: true,
      label: {
        normal: {
          show: true,
          textStyle: {
            color: 'rgba(0,0,0,0.4)'
          }
        }
      },
      itemStyle: {
        normal: {
          borderColor: 'rgba(0, 0, 0, 0.2)'
        },
        emphasis: {
          areaColor: null,
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          shadowBlur: 20,
          borderWidth: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    },

    series: [{
        type: 'scatter',
        coordinateSystem: 'geo',
        data: data,
        label: {
          normal: {
            formatter: '{b}',
            position: 'right',
            show: false
          },
          emphasis: {
            show: true
          }
        },
        itemStyle: {
          normal: {
            color: '#F06C00'
          }
        }
      },
      {
        name: '随机数据',
        type: 'map',
        mapType: 'china',
        roam: true, //是否开启鼠标缩放和平移漫游
        itemStyle: { //地图区域的多边形 图形样式
          normal: { //是图形在默认状态下的样式
            label: {
              show: false, //是否显示标签
              textStyle: {
                color: "rgb(249, 249, 249)"
              },
            }
          },
          emphasis: { //是图形在高亮状态下的样式,比如在鼠标悬浮或者图例联动高亮时
            label: {
              show: false,
              areaColor: null,
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              shadowBlur: 20,
              borderWidth: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        },
        data:data
      }
    ],
    roamController: {
      show: false,
      x: 'right',
      mapTypeControl: {
        'china': true
      }
    }
  };
  var chart = echarts.init(document.getElementById('main'));
  chart.setOption(option);

}
