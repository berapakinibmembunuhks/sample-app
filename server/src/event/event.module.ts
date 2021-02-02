import { Module, forwardRef } from "@nestjs/common";
import { MorganModule } from "nest-morgan";
import { PrismaModule } from "nestjs-prisma";
import { ACLModule } from "../auth/acl.module";
import { AuthModule } from "../auth/auth.module";
import { EventService } from "./event.service";
import { EventController } from "./event.controller";
import { EventResolver } from "./event.resolver";

@Module({
  imports: [
    ACLModule,
    forwardRef(() => AuthModule),
    MorganModule,
    PrismaModule,
  ],
  controllers: [EventController],
  providers: [EventService, EventResolver],
  exports: [EventService],
})
export class EventModule {}
