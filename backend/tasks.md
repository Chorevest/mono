### Database
#### Families (PK: familyId, FK: [userId ])
#### Users (PK: userId, email, phone, password,  FK: familyId, FK: [userId])
#### Notifications (emailNotificationsEnabled, phoneNotificationsEnabled, reminderEnabled, FK:userId
#### Chores (PK: choreId, choreName, chorePayout, choreAssignee = FK: userId, choreActive



### Database calls
#### Families
- [ ] createFamily (one family - to many parents and to many children) ( familyId, )
- [ ] deleteFamily
- [ ] createParent (many users to family)
- [ ] createChild (one family to many users) ( userId, )
      
#### Users

- [ ] editEmail
- [ ] editPassword
- [ ] enableNotifications
- [ ] addReminder (child function)
- [ ] - editReminder
- [ ] deleteProfile
      
##### Chores
- [ ] createChore (parent Function) (default values from initial creation but editable)
- [ ] editChore
- [ ] assignChoreChild (createsList - optional param that may separate lists)
- [ ] createChoreList (parent Function)
- [ ] submitChoreList (V1.2) (save chores stored in frontend to backend)

##### FinanceAccount
- [ ] addBankAccount (parentFunction) (maybe addVenmo)
- [ ] addChildInvestmentAccount (parentFunction)
- [ ] addChildSavingsAccount (could be diff then inv. like Fidelity vs. msufcu)
- [ ] addChildPayoutAccount (could be diff. like msufcu vs. venmo ?? maybe idk)
- [ ] editBankAccount (parentFunction) (maybe addVenmo)
- [ ] editChildInvestmentAccount (parentFunction)
- [ ] editChildSavingsAccount (could be diff then inv. like Fidelity vs. msufcu)
- [ ] editChildPayoutAccount (could be diff. like msufcu vs. venmo ?? maybe idk)
