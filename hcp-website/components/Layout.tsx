import { VStack } from "@chakra-ui/react";
import type { ReactElement } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Layout({ children }: { children: ReactElement }) {
    return (
        <VStack spacing={10} align="right" marginY={5}>
            <Header />
            {children}
            <Footer />
        </VStack>
    );
}
