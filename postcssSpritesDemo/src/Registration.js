import React, { Component } from 'react';
// import logo from './logo.svg';
import classNames from 'classnames';
import styles from './assets/css/registration.scss';

class Registration extends Component {

	constructor(props) {
		super(props)
		this.state = {
				name:'',
				sex:'0',
				number:'',
				ID:'',
				fromCompany:'',
				fromDepartment:'',
				reason:'',
				carNum:'',
				tel:'',
				date:'',
				comeWith:'',
				receive:''
		}
		this.onChange = this.onChange.bind(this);
		this.print = this.print.bind(this);
		this.clear = this.clear.bind(this);
		// this.state = { weather: null }
		// this.print = this.print.bind(this);
	}

	print() {
		// window.document.body.innerHTML = window.document.getElementById('toPrint').innerHTML;  
		// window.print(); 
		// window.location.reload();
		window.sessionStorage.setItem('stateInfo', JSON.stringify(this.state));
		document.getElementById('buttonSection').style.display = 'none';//不需要打印的部分隐藏
		window.print();
		document.getElementById('buttonSection').style.display = 'block';//恢复打印前的页面
		if (window.matchMedia) {
			var mediaQueryList = window.matchMedia('print');
			mediaQueryList.addListener((mql) => {
					if (mql.matches) {
						this.clear();
					} else {
						console.log('a');
					}
			})
		}
		
	}

	onChange(e){
		this.setState({
			[e.target.name]:e.target.value
		})
	}

	componentDidMount(){
		const stateInfo = JSON.parse(window.sessionStorage.getItem('stateInfo'));
		for(let i in stateInfo){
			this.setState({
				[i]:stateInfo[i]
			})
		}
	}

	clear(){
		window.sessionStorage.setItem('stateInfo','{}');
		const state = this.state;
		for(let i in state){
			this.setState({
				[i]:''
			})
		}
	}

	render() {
		return (
				<div className={styles.app}>
					<h3 className={styles.title}>访客登记单</h3>
					<form className={styles.form} autoComplete="off">
						<div className={classNames(styles.formGroup, styles.firstGroup)}>
							<label className={styles.label}>姓名</label><input name="name" onChange={this.onChange} className={styles.input} value={this.state.name} type="text"/>
							<label className={styles.label}>性别</label>
							<select className={styles.input} name="sex" onChange={this.onChange} value={this.state.sex}>
								<option value="0">男</option>
								<option value="1">女</option>
							</select>
							<label className={styles.label}>人数</label><input name="number" value={this.state.number} onChange={this.onChange} className={classNames(styles.input, styles.lastInput)} type="number"/>
						</div >
						<div className={styles.formGroup}>
							<label className={styles.label}>证件号</label><input name="ID" value={this.state.ID} maxLength="18" onChange={this.onChange} className={classNames(styles.input, styles.lastInput, styles.alignLeft)} type="number"/>
						</div >
						<div className={styles.formGroup}>
							<label className={styles.label}>单位</label><input name="fromCompany" value={this.state.fromCompany} onChange={this.onChange} className={classNames(styles.input, styles.lastInput, styles.alignLeft)} type="text"/>
						</div >
						<div className={styles.formGroup}>
							<label className={styles.label}>部门</label><input name="fromDepartment" value={this.state.fromDepartment} onChange={this.onChange} className={classNames(styles.input, styles.lastInput, styles.alignLeft)} type="text"/>
						</div >
						<div className={styles.formGroup}>
							<label className={styles.label}>事由</label><input name="reason" value={this.state.reason} onChange={this.onChange} className={classNames(styles.input, styles.lastInput, styles.alignLeft)} type="text"/>
						</div >
						<div className={styles.formGroup}>
							<label className={styles.label}>车牌号</label><input name="carNum" value={this.state.carNum} onChange={this.onChange} className={classNames(styles.input, styles.lastInput, styles.alignLeft)} type="text"/>
						</div >
						<div className={styles.formGroup}>
							<label className={styles.label}>电话</label><input name="tel" value={this.state.tel} maxLength="11" onChange={this.onChange} className={classNames(styles.input, styles.lastInput, styles.alignLeft)} type="number"/>
						</div >
						<div className={styles.formGroup}>
							<label className={styles.label}>时间</label><input name="date" value={this.state.date} onChange={this.onChange} className={classNames(styles.input, styles.lastInput, styles.alignLeft)} type="text"/>
						</div >
						<div className={styles.formGroup}>
							<label className={styles.label}>携带<br/>物品</label><input name="comeWith" value={this.state.comeWith} onChange={this.onChange} className={classNames(styles.input, styles.lastInput, styles.alignLeft)} type="text"/>
						</div >
						<div className={styles.formGroup}>
							<label className={styles.label}>接待人签字</label><input name="receive" onChange={this.onChange} className={classNames(styles.input, styles.receive)} value={this.state.receive} type="text"/>
						</div >
						<div className={classNames(styles.formGroup)}>
							<label className={styles.label}>办理人:</label>
						</div >
						<div className={classNames(styles.formGroup, styles.lastGroup)}>
							<label className={classNames(styles.label, styles.noBorder, styles.descript)}>说明：此单仅供本人使用，不得涂改转借，此单当日有效</label>
						</div >
						<div id="buttonSection">
							<div className={styles.opertion}>
								<button className={classNames(styles.btn, styles.btnPrint)} onClick={this.print}>打印</button> <button onClick={this.clear} className={classNames(styles.btn, styles.btnClear)}>撤销</button>
							</div >
						</div>
					</form>
				</div>
		)
	}
}

export default Registration;
