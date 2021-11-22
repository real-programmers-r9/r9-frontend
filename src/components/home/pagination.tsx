// import "./styles.css"; // css 처리하기
// import React, { useState } from "react";
// // import { userdata } from "./users";
// import JobCard from "./JobCard";
// import { Grid } from "@mui/material";
// // import ReactPaginate from "react-paginate";

// export default function Pagination() {
//   const [users, setUsers] = useState(userdata.slice(0, 50)); //num of users
//   const [pageNumber, setPageNumber] = useState(0);

//   const usersPerPage = 10; // 10 ppl on 1 page
//   const pagesVisited = pageNumber * usersPerPage; // e.g. 3 * 10

//   const displayUsers = users
//     .slice(pagesVisited, pagesVisited + usersPerPage)
//     .map((user) => {
//       return (
//         <Grid item key={user.id}>
//           <JobCard user={user} />
//         </Grid>
//       );
//     });

//   const pageCount = Math.ceil(users.length / usersPerPage);

//   const changePage = ({ selected }) => {
//     setPageNumber(selected);
//   };

//   return (
//     <div className="App">
//       <h2>react-pagination</h2>
//       <Grid justifyContent="center" container spacing={1}>
//         {/* 아래애는 10 users만 불러옴 */}
//         {displayUsers}
//         <ReactPaginate
//           previousLabel={"Prev"}
//           nextLabel={"Next"}
//           pageCount={pageCount}
//           onPageChange={changePage}
//           containerClassName={"paginationBttns"}
//           previousLinkClassName={"previousBttn"}
//           nextLinkClassName={"nextBttn"}
//           disabledClassName={"paginationDisabled"}
//           activeClassName={"paginationActive"}
//         />
//       </Grid>
//     </div>
//   );
// }
