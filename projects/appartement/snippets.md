### Find nearest city

```sql
select
  *,
  (
    6371 * acos(
      cos(radians(${latitude}))
      * cos(radians(latitude))
      * cos(radians(longitude) - radians(${longitude}))
      + sin(radians(${latitude}))
      * sin(radians(latitude))
    )
  ) as distance
from cities
order by distance asc
limit 1
```

### Expire outdated rental requests

```ts
import { expireOutdatedRentalRequests } from "./queries/rental-requests/expire-outdated";

console.log("[server-entry]: using custom server entry in 'src/server.ts'");

export default {
  /**
   * Runs daily at midnight UTC to expire outdated rental requests
   */
  async scheduled(
    event: ScheduledEvent,
    env: Env,
    ctx: ExecutionContext
  ): Promise<void> {
    console.log(
      "[Cron Job] Starting scheduled task: expire outdated rental requests"
    );
    console.log(
      `[Cron Job] Trigger time: ${new Date(event.scheduledTime).toISOString()}`
    );

    try {
      const sql = (await import("postgres")).default(
        env.HYPERDRIVE.connectionString
      );
      const result = await expireOutdatedRentalRequests(sql);

      if (result.success) {
        console.log(
          `[Cron Job] Successfully completed. Expired ${result.expiredCount} request(s)`
        );
      } else {
        console.error(`[Cron Job] Failed: ${result.error}`);
      }
      await sql.end();
    } catch (error) {
      console.error("[Cron Job] Unexpected error:", error);
      throw error;
    }
  },
};
```
