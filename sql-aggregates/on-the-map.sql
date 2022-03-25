select "countries"."name" as "countryName",
count("cities"."cityId") as "totalCities"
from "countries"
join "cities" using ("countryId")
group by "countries"."countryId";
