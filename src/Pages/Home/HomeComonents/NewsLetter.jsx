
import { Banner, Button, Label, TextInput } from 'flowbite-react';

const NewsLetter = () => {
    return (
        <Banner>
        <div className="flex w-11/12 mx-auto items-center my-20 justify-between border-b border-gray-200 bg-[#D4F6C8] p-10 dark:border-gray-600 dark:bg-gray-700">
          <div className="mx-auto flex w-full flex-shrink-0 items-center sm:w-auto">
            <form action="#" className="flex w-full flex-col items-center md:flex-row md:gap-x-3">
              <Label
                htmlFor="email"
                className="mb-2 mr-auto flex-shrink-0 text-sm font-medium text-gray-500 dark:text-gray-400 md:m-0 md:mb-0"
              >
                Sign up for our newsletter
              </Label>
              <TextInput id="email" placeholder="Enter your email" required type="email" />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>
      </Banner>
    );
};

export default NewsLetter;