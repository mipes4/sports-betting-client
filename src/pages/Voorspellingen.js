// import React, { useEffect } from "react";
// import { useHistory } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// // redux
// import { fetchMatchesAndPredictions } from "../store/matches/actions";
// import { selectToken } from "../store/user/selectors";
// // import { selectMatches } from "../store/matches/selectors";
// // import { appLoading } from "../store/appState/actions";
// // components
// import TableMatches from "../components/matches/TableMatches";
// // import MatchEntry from "../components/matches/MatchEntry";
// // styles
// import { Container } from "react-bootstrap";

// export default function Voorspellingen() {
//   const dispatch = useDispatch();
//   const token = useSelector(selectToken);
//   const history = useHistory();
//   useEffect(() => {
//     dispatch(fetchMatchesAndPredictions());
//   });

//   useEffect(() => {
//     if (token === null) {
//       history.push("/login");
//     }
//   }, [token, history]);

//   return (
//     <Container>
//       <TableMatches />
//     </Container>
//   );
// }
