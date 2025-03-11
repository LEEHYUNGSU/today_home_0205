import { Prisma } from "@prisma/client";

export type HomeType = Prisma.HomeDataGetPayload<{
  select: {
    id: true;
    username: true;
    images: true;
    like: true;
    bookmark: true;
    content: true;
    shared: true;
    createdAt: true;
    user: {
      select: { userImg: true, userTitle: true, };
    };
    chatArr: {
      select: {content: true, username: true, like: true,}
    }
  };
}>;

export type UserTotalType = Prisma.UserGetPayload<{}>;