import { AspectRatio, Box, Button, Heading, HStack, Link, Text, useColorModeValue, VStack } from '@chakra-ui/react'

import { Layout } from '@components/layout'
import { FaFacebook, FaInstagram, FaTelegram } from 'react-icons/fa'

export const Contacts = () => {
	return (
		<Layout>
    <VStack gap={4}>
			<Heading>Contacts </Heading>
      <VStack
        bgColor={useColorModeValue('gray.200', 'gray.700')}
        borderRadius={'lg'}
        p={4}
        w={'fit-content'}
        alignItems={'left'}
      >
        <Box>
          <Text color={useColorModeValue('gray.600', 'gray.400')}>Telephone number:</Text>
          <Text>998 99 903-00-60</Text>
        </Box>
        <Box>
          <Text color={useColorModeValue('gray.600', 'gray.400')}>Questions, feedback and suggestions:</Text>
          <Text>feedback@delipizza.com</Text>
        </Box>
        <Box>
          <Text color={useColorModeValue('gray.600', 'gray.400')}>Address:</Text>
          <Text>Taras Shevchenko Street in Tashkent</Text>
        </Box>
      </VStack>
      <HStack>
        <Button as={Link} href={'https://www.facebook.com/'} target={'_blank'}  colorScheme='facebook' leftIcon={<FaFacebook />}>
          Facebook
        </Button>
        <Button as={Link} href={'https://www.instagram.com/'} target={'_blank'} colorScheme='red' leftIcon={<FaInstagram />}>
          Instagram
        </Button>
        <Button  as={Link} href={'https://t.me/dev_islom/'} target={'_blank'} colorScheme='telegram' leftIcon={<FaTelegram />}>
          Telegram
        </Button>
      </HStack>
      <AspectRatio w={{base:'90vw', md:'2xl', lg: '4xl'}}  ratio={16 / 9}>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11989.338536748433!2d69.25455223246318!3d41.30158330485922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b6284c82f1f%3A0xbd4558557706a74a!2sPapa%20Pizza!5e0!3m2!1sen!2s!4v1682241657382!5m2!1sen!2s"></iframe>
      </AspectRatio>
      </VStack>
		</Layout>
	)
}
