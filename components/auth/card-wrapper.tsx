"use client";

import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Header } from "./header";
import Social from "./social";
import BackButton from "./back-button";


interface CardWrapperProps {
  children: React.ReactNode;
  headerLable: string;
  backButtonLable: string;
  backuttonHref: string;
  showSocial?: boolean;
}

export const CardWrapper = ({
  children,
  headerLable,
  backButtonLable,
  backuttonHref,
  showSocial,
}: CardWrapperProps) => {
  return (
    <Card className="w-[400px] shadow-md">
      <CardHeader>
        <Header lable={headerLable} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocial && (
        <CardFooter>
          <Social />
        </CardFooter>
      )}
      <CardFooter>
        <BackButton
        lable={backButtonLable}
        href={backuttonHref}
        />
      </CardFooter>
    </Card>
  );
};
