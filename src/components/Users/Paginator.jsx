import React from 'react';
import style from './Paginator.module.css';

const Paginator = (props) => {
  let { usersTotalCount, pageCount, currentPage, onPageChange } = props;
  
  let pages = [];
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }
  
  return (
    <>
      <div>{usersTotalCount === 0 ? null : `Всего пользователей: ${usersTotalCount}`}</div>
      <div>{pageCount === 0 ? null : `Всего страниц: ${pageCount}`}</div>

      <div className={style.pageNumConteiner}>
        {
          pages.map(p => {
            return <span key={p} 
                         className={`${style.pageItem} ${currentPage === p ? style.currentPage : ""} `}
                         onClick={(e) => { onPageChange(p) }}>{p}
                   </span>
          })
        }
      </div>
    </>
  )
};

export default Paginator;