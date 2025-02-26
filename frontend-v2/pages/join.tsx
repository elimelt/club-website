import { useState, useEffect } from "react";
import { Inter } from "@next/font/google";
import {
    Center,
    VStack,
    Flex,
    Link,
    Box,
    Text,
    Button,
    Image,
    IconButton,
} from "@chakra-ui/react";
import styles from "@/styles/Join.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import type { ChangeEvent, KeyboardEvent } from "react";
// @ts-ignore
import { sendEmail } from "@/utils/api";
import { renderToHTML } from "next/dist/server/render";

const inter = Inter({ subsets: ["latin"] });

function renderJoinPage() {
    return (
        <Flex
        //  id={isMobile ? "join-container-mobile" : "join-container"}
            height='700px'
            direction='column'
            width='100vw'
            maxW='1500px'
            borderRadius='30px'
            alignItems='center'
        >
            <Text 
                fontFamily={'Segoe'}
                fontSize='5xl'
                color="white"
                marginTop='4'
            >
                Join Us
            </Text>
            <Text 
                display='inline' 
                fontSize="2xl" 
                color="white" 
                marginTop='8'
            >
                Fill out the form below to join Husky Coding Project!
            </Text>
        {/* {isMobile ? displayJoinPageMobile() : displayJoinPage()} */}
        </Flex>
    )
}

export default function Join() {
    // Scroll to top of page
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [width, setWidth] = useState<number | null>(null);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [content, setContent] = useState("");
    useEffect(() => {
        const handleWindowSizeChange = () => {
            setWidth(window.innerWidth);
        };
        window.addEventListener("resize", handleWindowSizeChange);
        return () => {
            window.removeEventListener("resize", handleWindowSizeChange);
        };
    }, []);

    const isMobile = width === null ? false : width <= 800;

    const renderLink = () => {
        <div>
            Hahaha
            <FontAwesomeIcon
                height='40px'
                color='white'
                icon={faEnvelope}
            />
        </div>

    }

    const displayEmailForm = () => {
        const handleClick = () => {
            setName("");
            setEmail("");
            setContent("");
            sendEmail(name, email, content);
        };
        const handleNameChange = async (
            event: ChangeEvent<HTMLInputElement>,
        ) => {
            setName(event.target.value);
        };
        const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
            setEmail(event.target.value);
        };
        const handleContentChange = (event: ChangeEvent<HTMLInputElement>) => {
            setContent(event.target.value);
        };
        return (
            <div id="emailform">
                <br />
                <br />
                <Text id="objective" variant="subtitle1" color="white">
                    ...or send us a message :)
                    <br />
                    <br />
                </Text>
                <form>
                    <label>
                        <Text
                            color="primary"
                            // required
                            sx={{ input: { color: "white" } }}
                            // fullWidth
                            // focused
                            id="filled-basic"
                            // label="Name"
                            variant="outlined"
                            // value={name}
                            onChange={handleNameChange}
                        />
                        {/* <input type="text" name="name" value={name} onChange={handleNameChange}/> */}
                    </label>
                    <br />
                    <br />
                    <label>
                        <Text
                            color="primary"
                            // required
                            sx={{ input: { color: "white" } }}
                            // fullWidth
                            // focused
                            id="filled-basic"
                            // label="Email"
                            variant="outlined"
                            // value={email}
                            onChange={handleEmailChange}
                        />
                    </label>
                    <br />
                    <br />
                    <label>
                        <Text
                            color="primary"
                            // required
                            // focused
                            id="filled-basic"
                            // label="Message"
                            variant="outlined"
                            // multiline
                            // rows={6}
                            // fullWidth
                            // value={content}
                            onChange={handleContentChange}
                        />
                    </label>
                    <br />
                    <br />
                    {/*<IconButton*/}
                    {/*    variant="contained"*/}
                    {/*    color="secondary"*/}
                    {/*    onClick={handleClick}*/}
                    {/*    endIcon={<SendIcon />}*/}
                    {/*    disabled={name === "" || email === "" || content === ""}*/}
                    {/*>*/}
                    {/*    Submit*/}
                    {/*</IconButton>*/}
                </form>
            </div>
        );
    };

    const displayJoinPage = () => {
        return (
            // <div className="google-form-embed">
            //     <iframe
            //         className="iframe"
            //         title="club sign up google form"
            //         frameBorder={0}
            //         src="https://docs.google.com/forms/d/e/1FAIpQLSc5wyLuacKqZpezaffwB8jZZVz9yBo83tvA-U_vsRMiPbGslA/viewform?embedded=true"
            //     >
            //         Loading…
            //     </iframe>
            //     {displayEmailForm()}
            // </div>
            <div style={{ width: "70%" }}>
                {/*<IconButton*/}
                {/*    color="secondary"*/}
                {/*    variant="contained"*/}
                {/*    href="https://forms.gle/JpJaoznG4FBvS1paA"*/}
                {/*    target="_blank"*/}
                {/*>*/}
                {/*    {" "}*/}
                {/*    Link to Form{" "}*/}
                {/*</IconButton>*/}
                <br />
                {displayEmailForm()}
            </div>
        );
    };

    // IconButton link to google form
    const displayJoinPageMobile = () => {
        return (
            <div>
                {/*<IconButton*/}
                {/*    color="secondary"*/}
                {/*    variant="contained"*/}
                {/*    href="https://forms.gle/JpJaoznG4FBvS1paA"*/}
                {/*    target="_blank"*/}
                {/*>*/}
                {/*    {" "}*/}
                {/*    Link to Form{" "}*/}
                {/*</IconButton>*/}
            </div>
        );
    };


    return (
        <div id={isMobile ? "join-background-mobile" : "join-background"}>
            <Flex
            //  id={isMobile ? "join-container-mobile" : "join-container"}
                height='700px'
                direction='column'
                width='100vw'
                maxW='1500px'
                borderRadius='30px'
                alignItems='center'
            >
                <Text 
                    fontFamily={'Segoe'}
                    fontSize='5xl'
                    color="white"
                    marginTop='4'
                >
                    Join Us
                </Text>
                <Text 
                    display='inline' 
                    fontSize="2xl" 
                    color="white" 
                    marginTop='8'
                >
                    Fill out the form below to join Husky Coding Project!
                </Text>

                <Link href="https://forms.gle/JpJaoznG4FBvS1paA">
                    <Button 
                        rightIcon={                        <FontAwesomeIcon
                            // height='40px'
                            // color='white'
                            icon={faEnvelope}
                        />}
                        colorScheme='purple' size='s' variant='solid'>
                        Link to Form 
                    </Button>
                </Link>
                {/* <FontAwesomeIcon
                    height='40px'
                    color='white'
                    icon={faEnvelope}
                /> */}
            </Flex>
            

        </div>
    );
}
