<template>
  <div class="wrapper-monster-status">
    <ul class="level-race-size">
      <li class="level-race-size-items" v-for="stat in CompStatus" :key="stat.key">
        <MonsterSizeLevelRace :key-value-icon="stat"/>
      </li>
    </ul>

    <div class="attributes">
      <IsMvp/>
      <MonsterPrimaryAttribute/>
    </div>

  </div>
</template>
<script lang="ts">
import {defineComponent} from "vue";
import MonsterSizeLevelRace from "./MonsterStatus/MonsterSizeLevelRace.vue";
import {IKeyValueIcon} from "../../structs/IKeyValueIcon";
import IsMvp from "./MonsterStatus/IsMvp.vue";
import MonsterPrimaryAttribute from "./MonsterStatus/MonsterPrimaryAttribute.vue";
import {mapState} from "pinia";
import {useMonsterStore} from "../../stores/MonsterStore";

export default defineComponent({
  components: {MonsterPrimaryAttribute, IsMvp, MonsterSizeLevelRace},
  computed: {
    CompStatus(): IKeyValueIcon[] {
      return [
        {
          "key": "Level",
          "value": this.currentMonster.level + '',
          "icon": "level-icon"
        },
        {
          "key": "Race",
          "value": this.currentMonster.race + '',
          "icon": "race-icon"
        },
        {
          "key": "Size",
          "value": this.currentMonster.size + '',
          "icon": "medium-icon"
        },
      ] as IKeyValueIcon[]
    },
    ...mapState(useMonsterStore, ['currentMonster'])
  },

})
</script>
<style scoped>

* {
  width: 460px;
  border-radius: 10px;
  box-sizing: border-box;
  margin: 0 15px 15px;
  list-style: none;
}

.wrapper-monster-status {
  background-color: #8D95D7;
  height: 200px;
  margin-bottom: 15px;
  padding: 15px 0 0 15px;
  box-shadow: 0 5px 12px .1rem rgba(0, 0, 0, 0.3);


}

.level-race-size {
  display: flex;
  gap: 15px;
  height: 70px;
  width: 430px;
  padding: 0;
  margin: 0;
}

.level-race-size-items {
  margin: 0;
  background-color: #6C6C95;
  display: flex;
  height: 70px;
  width: 125px;
}

.level-race-size-items:nth-child(2) {
  width: 150px;
}

.attributes {
  display: flex;
  height: 93px;
  width: 430px;
  margin: 10px 0 0 0;

}



</style>
