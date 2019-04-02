import React, { Component } from 'react';
// import logo from './logo.svg';
import classNames from 'classnames';
import styles from './assets/css/registration.scss';

class Registration extends Component {

  constructor (props) {
    super(props)
    // this.state = { weather: null }
    // this.print = this.print.bind(this);
  }

  print(){
    window.document.body.innerHTML = window.document.getElementById('toPrint').innerHTML;  
    window.print(); 
    window.location.reload();
  }

  render() {
      return (
				<div id="toPrint">
					<div className={styles.app}>
					<p className={styles.title}>访客登记单</p>
					<p className={classNames(styles.infos, styles.firstLine)}>
						<span>姓名</span><input></input>
						<span>性别</span><input></input>
						<span>人数</span><input></input>
					</p>
					<p className={styles.infos}>
						<span>证件号</span><input></input>
					</p>
					<p className={styles.infos}>
						<span>单位</span><input></input>
					</p>
					<p className={styles.infos}>
						<span>部门</span><input></input>
					</p>
					<p className={styles.infos}>
						<span>事由</span><input></input>
					</p>
					<p className={styles.infos}>
						<span>车牌号</span><input></input>
					</p>
					<p className={styles.infos}>
						<span>电话</span><input></input>
					</p>
					<p className={styles.infos}>
						<span>时间</span><input></input>
					</p>
					<p className={styles.infos}>
						<span>携带物品</span><input></input>
					</p>
					<p className={styles.infos}>
						<span>接待人签字</span>
					</p>
					<p className={styles.lastLine}>
						<span>办理人:</span>
					</p>
					<p className={styles.opertion}>
						<button onClick={this.print}>打印</button> <button>撤销</button>
					</p>
					</div>
			</div>
			)
    }
}

export default Registration;
