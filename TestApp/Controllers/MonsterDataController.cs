using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.IO;
using System.Linq;


namespace TestApp.Controllers
{
    [Route("api/[controller]")]
    public class MonsterDataController : Controller
    {
        [HttpGet()]
        public dynamic MonsterList()
        {
            return ReadJson().Monsters.Values.Select(t => new { t.Id, t.Name }).ToList();
        }

        [HttpGet("{monsterId}")]
        public MonsterDetails Monster(string monsterId)
        {
            return ReadJson().Monsters.GetValueOrDefault(monsterId, new MonsterDetails());
        }

        //TODO: Remove this private method from the controller.
        //TODO: Also look into not opening and scanning the whole json file for each query.
        [NonAction]
        private MonsterData ReadJson()
        {
            using (StreamReader r = new StreamReader("ClientApp/app/data/monster-details.json"))
            {
                JsonSerializer serializer = new JsonSerializer();
                MonsterData test = (MonsterData)serializer.Deserialize(r, typeof(MonsterData));
                return test;
            }
        }
    }

    //TODO: Move these.
    public class MonsterData
    {
        public Dictionary<string, MonsterDetails> Monsters { get; set; }
        public Dictionary<string, BossDetails> Bosses { get; set; }
    }

    public class MonsterDetails
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Race { get; set; }
        public string Class { get; set; }
        public IEnumerable<MonsterLevel> Stats { get; set; }
    }

    public class MonsterLevel
    {
        public int Level { get; set; }
        public LevelStats Normal { get; set; }
        public LevelStats Elite { get; set; }
    }

    public class LevelStats
    {
        public int Health { get; set; }
        public int Move { get; set; }
        public int Attack { get; set; }
        public int Range { get; set; }
        public IEnumerable<string> Attributes { get; set; }
    }

    public class BossDetails
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Race { get; set; }
        public string Class { get; set; }
        public IEnumerable<BossLevel> Stats { get; set; }
    }

    public class BossLevel
    {
        public int Level { get; set; }
        public string Health { get; set; }
        public string Move { get; set; }
        public string Attack { get; set; }
        public string Range { get; set; }
        public IEnumerable<string> Special1 { get; set; }
        public IEnumerable<string> Special2 { get; set; }
        public IEnumerable<string> Immunities { get; set; }
        public string Notes { get; set; }
    }
}