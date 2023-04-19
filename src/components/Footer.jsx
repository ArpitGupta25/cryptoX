import { Avatar, Box, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
const avatarS="https://yt3.ggpht.com/yti/AHyvSCD3bZHU2-RlizdxtNJIefkA7ugWMAYzuZ498YIhyQ=s108-c-k-c0x00ffffff-no-rj"
const Footer = () => {
  return (
    <Box bgColor={"blackAlpha.900"}
    color={"whiteAlpha.700"}
    minH={"48"}
    px={"16"}
    py={["16","32"]}>

        <Stack direction={["column","row"]}
        h={"full"}
        alignItems={"colors"}
        >
            <VStack w={"full"} alignItems={["center","flex-start"]}>
        <Text fontWeight={"bold"} alignContent={"flex-end"}>About Us</Text>
        <Text fontSize={"sm"} letterSpacing={"widest"} textAlign={["centre","left"]}>
            We are the best crypto trading app in India, we provide our guidance at a very cheap price.
        </Text>
            </VStack>
            <VStack>
                <Avatar boxSize={"28"} mt={["4","0"]} src={avatarS}/>
                <Text>Founder</Text>
            </VStack>
        </Stack>
    </Box>
  )
}

export default Footer