import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import {
  FindOneLocationArgs,
  FindManyLocationArgs,
  LocationCreateArgs,
  LocationUpdateArgs,
  LocationDeleteArgs,
  Subset,
} from "@prisma/client";

@Injectable()
export class LocationService {
  constructor(private readonly prisma: PrismaService) {}
  findMany<T extends FindManyLocationArgs>(
    args: Subset<T, FindManyLocationArgs>
  ) {
    return this.prisma.location.findMany(args);
  }
  findOne<T extends FindOneLocationArgs>(args: Subset<T, FindOneLocationArgs>) {
    return this.prisma.location.findOne(args);
  }
  create<T extends LocationCreateArgs>(args: Subset<T, LocationCreateArgs>) {
    return this.prisma.location.create<T>(args);
  }
  update<T extends LocationUpdateArgs>(args: Subset<T, LocationUpdateArgs>) {
    return this.prisma.location.update<T>(args);
  }
  delete<T extends LocationDeleteArgs>(args: Subset<T, LocationDeleteArgs>) {
    return this.prisma.location.delete(args);
  }
}
