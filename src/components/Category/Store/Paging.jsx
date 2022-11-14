import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import swal from 'sweetalert';

export class ComponentCategoryStorePaging extends PureComponent {
  state = {
    availablePage: [],
    isFirst: false,
    isLast: false
  }

  componentDidMount() {
  }


  headPaging() {
    const currentPage = this.props.currentPage;
    if (currentPage > 1) {
      return <li class="phan_trang_lk" onClick={() => this.props.handleClickPage(currentPage - 1)}><Link>&lt;</Link></li>
    }
  }
  availablePage() {

  }
  tailPaging() {
    const curentPage = this.props.currentPage;
    const totalPage = this.props.totalPage;
    if (curentPage < totalPage) {
      return <li class="phan_trang_lk" onClick={() => this.props.handleClickPage(curentPage + 1)}><Link>&gt;</Link></li>
    }
  }
  render() {
    var isLast = false;
    var isFirst = false;
    if(this.props.totalPage<2) return (<></>)     
    return (
      <div
        className="store-filter clearfix"
        style={{
          position: "absolute",
          right: 0,
          bottom: "-50px",
          left: 0
        }}>
        <ul class="store-pagination">
          {this.headPaging()}
          {Array.from({ length: this.props.totalPage }, (v, i) => i + 1).map((page) => {
            if (([1, this.props.currentPage - 1, this.props.currentPage, this.props.currentPage + 1, this.props.totalPage].indexOf(page)) < 0) {
              if (!isFirst && (this.props.currentPage > 3)) {
                isFirst = true;
                return (<li class="phan_trang_lk" onClick={() => this.props.handleClickPage(page)}><Link>...</Link></li>)
              }
              if (!isLast && (this.props.currentPage < page)) {
                isLast = true;
                return (<li class="phan_trang_lk" onClick={() => this.props.handleClickPage(page)}><Link>...</Link></li>);
              }
            }
            else
              if (this.props.currentPage === page) {
                return (<li class="active phan_trang_lk" onClick={() => this.props.handleClickPage(page)}><Link>{page}</Link></li>)
              }
              else {
                return (<li class="phan_trang_lk" onClick={() => this.props.handleClickPage(page)}><Link>{page}</Link></li>)
              }
          })}
          {this.tailPaging()}
        </ul>
      </div>
    )
  }
}

export default ComponentCategoryStorePaging