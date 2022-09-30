import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";
import { Box } from "./Box";

const StyledLink = styled(NavLink)`
   color: #000;
   padding: 8px;

   &.active {
    color: #07c;
   }
`;

export const SharedLayout = () => {
    return (
        <Box pb="10px" as="nav">
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/movies">Movies</StyledLink>

            <Suspense fallback={<div>Loading page...</div>}>
                <Outlet />
            </Suspense>
        </Box>
    )
}