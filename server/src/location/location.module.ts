import { Module, forwardRef } from "@nestjs/common";
import { MorganModule } from "nest-morgan";
import { PrismaModule } from "nestjs-prisma";
import { ACLModule } from "../auth/acl.module";
import { AuthModule } from "../auth/auth.module";
import { LocationService } from "./location.service";
import { LocationController } from "./location.controller";
import { LocationResolver } from "./location.resolver";

@Module({
  imports: [
    ACLModule,
    forwardRef(() => AuthModule),
    MorganModule,
    PrismaModule,
  ],
  controllers: [LocationController],
  providers: [LocationService, LocationResolver],
  exports: [LocationService],
})
export class LocationModule {}
