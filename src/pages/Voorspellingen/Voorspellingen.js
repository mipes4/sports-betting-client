import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
// redux
import { selectToken } from "../../store/user/selectors";
// components
import TableMatches from "../../components/matches/TableMatches";
// styles
import { Container } from "react-bootstrap";

export default function Voorspellingen() {
  const token = useSelector(selectToken);
  const history = useHistory();

  useEffect(() => {
    if (token === null) {
      history.push("/login");
    }
  }, [token, history]);

  return (
    <Container className="mt-5">
      <TableMatches />
    </Container>
  );
}
