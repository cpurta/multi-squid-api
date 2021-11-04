import {Resolver, ObjectType, Field, Query} from "type-graphql"
import {InjectManager} from "typeorm-typedi-extensions"
import {EntityManager} from "typeorm"
import {HistoricalBalance} from "../generated/model"


@ObjectType()
export class Hello {
  @Field(() => String, { nullable: false })
  greeting!: string

  constructor(greeting: string) {
    this.greeting = greeting
  }
}


@Resolver()
export class HelloResolver {
  constructor(
    @InjectManager() private db: EntityManager
  ) {}

  @Query(() => Hello)
  async hello(): Promise<Hello> {
    let kusamaCount = await this.db.getRepository(HistoricalBalance).createQueryBuilder().andWhere(`"substrate_chain" = 'kusama'`).getCount()
    let polkadotCount = await this.db.getRepository(HistoricalBalance).createQueryBuilder().andWhere(`"substrate_chain" = 'polkadot'`).getCount()
    return new Hello(`Hello, we've seen ${kusamaCount} Kusama transfers, and ${polkadotCount} Polkadot transfers`)
  }
}